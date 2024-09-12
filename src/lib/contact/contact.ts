import {
  CheckboxBasic,
  ContactForm,
  ContactPage,
  Radio,
  Select,
  Textfield
} from '../../types';
import { FormInput, fromSnakeToCamel } from '../../components/dist';

export async function fetchContact(): Promise<ContactPage> {
  const url = `${process.env.CS_BASE_URL}/content_types/contact_form/entries?environment=development`;
  const options: RequestInit = {
    headers: {
      access_token: process.env.CS_ACCESS_TOKEN || '',
      api_key: process.env.CS_API_KEY || '',
      'Content-Type': 'application/json'
    }
  };

  const res = await fetch(url, options).then((res) => res.json());
  return prepareContactPage(res.entries[0]);
}

export function prepareContactPage(contactForm: ContactForm): ContactPage {
  const { description, form, title } = contactForm;
  const { container, inputs } = form;
  const preparedInputs: FormInput[] = [];
  const inputNames = [
    'name',
    'email',
    'location',
    'time',
    'subject',
    'colors',
    'description',
    'terms',
    'signup'
  ];

  inputNames.forEach((name) => {
    const preparedInput = prepareInput(inputs[name]);
    preparedInputs.push(preparedInput);
  });

  return { description, form: container, inputs: preparedInputs, title };
}

function prepareInput(
  input: CheckboxBasic
): FormInput {
  const { control, element_options: {helper_text_hint}, ...options } = input;
  const { helper_text_hint, ...rest } = element_options;
  const newHelperText = helper_text_hint ? <Tooltip arrow title={helper_text_hint}>{options.helper_text}</Tooltip> : options.helper_text;
  const preparedOptions: Record<string, unknown> = {};
  const inputKeys = Object.keys(options);
  inputKeys.forEach((inputKey) => {
    const key = inputKey as keyof typeof options;
    const newKey = fromSnakeToCamel(key);
    preparedOptions[newKey] = options[key];
  });
  preparedOptions.helperText = newHelperText;
  return { control, options: preparedOptions };
}
