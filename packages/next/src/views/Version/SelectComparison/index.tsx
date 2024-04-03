'use client'
import type { PaginatedDocs } from 'payload/database'
import type { Where } from 'payload/types'

import { ReactSelect } from '@payloadcms/ui/elements/ReactSelect'
import { fieldBaseClass } from '@payloadcms/ui/fields/shared'
import { useConfig } from '@payloadcms/ui/providers/Config'
import { useDocumentInfo } from '@payloadcms/ui/providers/DocumentInfo'
import { useTranslation } from '@payloadcms/ui/providers/Translation'
import { formatDate } from '@payloadcms/ui/utilities/formatDate'
import qs from 'qs'
import React, { useCallback, useEffect, useState } from 'react'

import type { Props } from './types.js'

import { mostRecentVersionOption, publishedVersionOption } from '../shared.js'
import './index.scss'

const baseClass = 'compare-version'

const maxResultsPerRequest = 10

const baseOptions = [mostRecentVersionOption]

export const SelectComparison: React.FC<Props> = (props) => {
  const { baseURL, onChange, parentID, publishedDoc, value, versionID } = props

  const {
    admin: { dateFormat },
  } = useConfig()

  const { docConfig } = useDocumentInfo()
  const [options, setOptions] = useState(baseOptions)
  const [lastLoadedPage, setLastLoadedPage] = useState(1)
  const [errorLoading, setErrorLoading] = useState('')
  const { i18n, t } = useTranslation()
  const loadedAllOptionsRef = React.useRef(false)

  const getResults = useCallback(
    async ({ lastLoadedPage: lastLoadedPageArg }) => {
      if (loadedAllOptionsRef.current) return
      const query: {
        [key: string]: unknown
        where: Where
      } = {
        depth: 0,
        limit: maxResultsPerRequest,
        page: lastLoadedPageArg,
        where: {
          and: [
            {
              id: {
                not_equals: versionID,
              },
            },
          ],
        },
      }

      if (docConfig.versions?.drafts) {
        query.where.and.push({
          latest: {
            not_equals: true,
          },
        })
      }

      if (parentID) {
        query.where.and.push({
          parent: {
            equals: parentID,
          },
        })
      }

      const search = qs.stringify(query)

      const response = await fetch(`${baseURL}?${search}`, {
        credentials: 'include',
        headers: {
          'Accept-Language': i18n.language,
        },
      })

      if (response.ok) {
        const data: PaginatedDocs = await response.json()
        if (data.docs.length > 0) {
          setOptions((existingOptions) => [
            ...existingOptions,
            ...data.docs.map((doc) => ({
              label: formatDate(doc.updatedAt, dateFormat, i18n.language),
              value: doc.id,
            })),
          ])

          if (!data.hasNextPage) {
            loadedAllOptionsRef.current = true
          }
          setLastLoadedPage(data.page)
        }
      } else {
        setErrorLoading(t('error:unspecific'))
      }
    },
    [dateFormat, baseURL, parentID, versionID, t, i18n, docConfig.versions?.drafts],
  )

  useEffect(() => {
    void getResults({ lastLoadedPage: 1 })
  }, [getResults])

  return (
    <div
      className={[fieldBaseClass, baseClass, errorLoading && 'error-loading']
        .filter(Boolean)
        .join(' ')}
    >
      <div className={`${baseClass}__label`}>{t('version:compareVersion')}</div>
      {!errorLoading && (
        <ReactSelect
          isClearable={false}
          isSearchable={false}
          onChange={onChange}
          onMenuScrollToBottom={() => {
            void getResults({ lastLoadedPage: lastLoadedPage + 1 })
          }}
          options={[
            ...(publishedDoc?._status === 'published' ? [publishedVersionOption] : []),
            ...options,
          ]}
          placeholder={t('version:selectVersionToCompare')}
          value={value}
        />
      )}
      {errorLoading && <div className={`${baseClass}__error-loading`}>{errorLoading}</div>}
    </div>
  )
}