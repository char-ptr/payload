import { getPayload } from '../../packages/payload/src'
import { NextRESTClient } from '../helpers/NextRESTClient'
import { startMemoryDB } from '../startMemoryDB'
import configPromise from './config'
import {
  applicationEndpoint,
  collectionSlug,
  globalEndpoint,
  globalSlug,
  noEndpointsCollectionSlug,
  noEndpointsGlobalSlug,
  rootEndpoint,
} from './shared'

let restClient: NextRESTClient

describe('Endpoints', () => {
  beforeAll(async () => {
    const config = await startMemoryDB(configPromise)
    await getPayload({ config })
    restClient = new NextRESTClient(config)
  })

  describe('Collections', () => {
    it('should GET a static endpoint', async () => {
      const response = await restClient.GET(`/${collectionSlug}/say-hello/joe-bloggs`)
      const data = await response.json()
      expect(response.status).toBe(200)
      expect(data.message).toStrictEqual('Hey Joey!')
    })

    it('should GET an endpoint with a parameter', async () => {
      const name = 'George'
      const response = await restClient.GET(`/${collectionSlug}/say-hello/${name}`)
      const data = await response.json()
      expect(response.status).toBe(200)
      expect(data.message).toStrictEqual(`Hello ${name}!`)
    })

    it('should POST an endpoint with data', async () => {
      const params = { name: 'George', age: 29 }
      const response = await restClient.POST(`/${collectionSlug}/whoami`, {
        body: JSON.stringify(params),
      })
      const data = await response.json()
      expect(response.status).toBe(200)
      expect(data.name).toStrictEqual(params.name)
      expect(data.age).toStrictEqual(params.age)
    })

    it('should disable built-in endpoints when false', async () => {
      const response = await restClient.GET(`/${noEndpointsCollectionSlug}`)
      expect(response.status).toBe(501)
    })
  })

  describe('Globals', () => {
    it('should call custom endpoint', async () => {
      const params = { globals: 'response' }
      const response = await restClient.POST(`/globals/${globalSlug}/${globalEndpoint}`, {
        body: JSON.stringify(params),
      })
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(params).toMatchObject(data)
    })
    it('should disable built-in endpoints when false', async () => {
      const response = await restClient.GET(`/globals/${noEndpointsGlobalSlug}`)
      expect(response.status).toBe(501)
    })
  })

  describe('API', () => {
    it('should call custom endpoint', async () => {
      const params = { app: 'response' }
      const response = await restClient.POST(`/${applicationEndpoint}`, {
        body: JSON.stringify(params),
      })
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(params).toMatchObject(data)
    })

    it('should have i18n on req', async () => {
      const response = await restClient.GET(`/${applicationEndpoint}/i18n`)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.message).toStrictEqual('Updated successfully.')
    })
  })

  describe('Root', () => {
    it('should call custom root endpoint', async () => {
      const params = { root: 'response' }
      const response = await restClient.POST(`/${rootEndpoint}`, {
        body: JSON.stringify(params),
      })
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(params).toMatchObject(data)
    })
  })
})
