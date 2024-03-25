import type { Where } from 'payload/types'

import { HydrateClientUser } from '@payloadcms/ui/elements/HydrateClientUser'
import { RenderCustomComponent } from '@payloadcms/ui/elements/RenderCustomComponent'
import { TableColumnsProvider } from '@payloadcms/ui/elements/TableColumns'
import { ListInfoProvider } from '@payloadcms/ui/providers/ListInfo'
import { ListQueryProvider } from '@payloadcms/ui/providers/ListQuery'
import { notFound } from 'next/navigation.js'
import { createClientCollectionConfig } from 'payload/config'
import { type AdminViewProps } from 'payload/types'
import { isEntityHidden, isNumber, mergeListSearchAndWhere } from 'payload/utilities'
import React, { Fragment } from 'react'

import type { DefaultListViewProps, ListPreferences } from './Default/types.js'

import { Unauthorized } from '../Unauthorized/index.js'
import { DefaultListView } from './Default/index.js'

export { generateListMetadata } from './meta.js'

export const ListView: React.FC<AdminViewProps> = async ({ initPageResult, searchParams }) => {
  const {
    collectionConfig,
    permissions,
    req: {
      locale,
      payload,
      payload: { config },
      query,
      user,
    },
  } = initPageResult

  const collectionSlug = collectionConfig?.slug

  if (!permissions?.collections?.[collectionSlug]?.read?.permission) {
    return <Unauthorized initPageResult={initPageResult} searchParams={searchParams} />
  }

  let listPreferences: ListPreferences
  const preferenceKey = `${collectionSlug}-list`

  try {
    listPreferences = (await payload
      .find({
        collection: 'payload-preferences',
        depth: 0,
        limit: 1,
        user,
        where: {
          key: {
            equals: preferenceKey,
          },
        },
      })
      ?.then((res) => res?.docs?.[0]?.value)) as ListPreferences
  } catch (error) {} // eslint-disable-line no-empty

  const {
    routes: { admin },
  } = config

  if (collectionConfig) {
    const {
      admin: { components: { views: { List: CustomList } = {} } = {}, hidden },
    } = collectionConfig

    if (isEntityHidden({ hidden, user })) {
      return notFound()
    }

    let CustomListView = null

    if (CustomList && typeof CustomList === 'function') {
      CustomListView = CustomList
    } else if (typeof CustomList === 'object' && typeof CustomList.Component === 'function') {
      CustomListView = CustomList.Component
    }

    const page = isNumber(query?.page) ? query.page : 0
    const whereQuery = mergeListSearchAndWhere({
      collectionConfig,
      query: {
        search: typeof query?.search === 'string' ? query.search : undefined,
        where: (query?.where as Where) || undefined,
      },
    })
    const limit = isNumber(query?.limit)
      ? query.limit
      : listPreferences?.limit || collectionConfig.admin.pagination.defaultLimit
    const sort =
      query?.sort && typeof query.sort === 'string'
        ? query.sort
        : listPreferences?.sort || undefined

    const data = await payload.find({
      collection: collectionSlug,
      depth: 0,
      draft: true,
      fallbackLocale: null,
      limit,
      locale,
      overrideAccess: false,
      page,
      sort,
      user,
      where: whereQuery || {},
    })

    const viewComponentProps: DefaultListViewProps = {
      collectionSlug,
      listSearchableFields: collectionConfig.admin.listSearchableFields,
    }

    return (
      <Fragment>
        <HydrateClientUser permissions={permissions} user={user} />
        <ListInfoProvider
          collectionConfig={createClientCollectionConfig(collectionConfig)}
          collectionSlug={collectionSlug}
          hasCreatePermission={permissions?.collections?.[collectionSlug]?.create?.permission}
          newDocumentURL={`${admin}/collections/${collectionSlug}/create`}
        >
          <ListQueryProvider
            data={data}
            defaultLimit={limit || collectionConfig?.admin?.pagination?.defaultLimit}
            defaultSort={sort}
            modifySearchParams
            preferenceKey={preferenceKey}
          >
            <TableColumnsProvider
              collectionSlug={collectionSlug}
              enableRowSelections
              listPreferences={listPreferences}
              preferenceKey={preferenceKey}
            >
              <RenderCustomComponent
                CustomComponent={CustomListView}
                DefaultComponent={DefaultListView}
                componentProps={viewComponentProps}
              />
            </TableColumnsProvider>
          </ListQueryProvider>
        </ListInfoProvider>
      </Fragment>
    )
  }

  return notFound()
}