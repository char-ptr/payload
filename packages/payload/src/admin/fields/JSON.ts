import type { GenericClientFieldConfig } from '../../fields/config/client.js'
import type { JSONFieldValidation } from '../../fields/validations.js'
import type { ErrorComponent } from '../forms/Error.js'
import type { DescriptionComponent, FormFieldBase, LabelComponent } from '../types.js'

export type JSONFieldProps = {
  readonly clientFieldConfig: GenericClientFieldConfig<'json'>
  readonly validate?: JSONFieldValidation
} & FormFieldBase

export type JSONFieldLabelComponent = LabelComponent<'json'>

export type JSONFieldDescriptionComponent = DescriptionComponent<'json'>

export type JSONFieldErrorComponent = ErrorComponent<'json'>
