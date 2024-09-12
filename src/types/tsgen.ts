import { InputControlKeys } from '../components/dist';

export interface File {
  uid: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
  content_type: string;
  file_size: string;
  tags: string[];
  filename: string;
  url: string;
  ACL: any[];
  is_dir: boolean;
  parent_uid: string;
  _version: number;
  title: string;
  publish_details: {
    environment: string;
    locale: string;
    time: string;
    user: string;
  };
}

export interface Link {
  title: string;
  href: string;
}

export interface CheckboxBasic {
  element_options?: {
     /** Helper text */
   helper_text?: string;
   helper_text_hint?: string;
  }
  /** Label */
  label?: string;
  /** Name */
  name?: string;
  /** Checked */
  checked?: boolean;
  /** Required */
  required?: boolean;
  /** Value */
  value?: string;
  /** Control */
  control: InputControlKeys;
}

export interface Checkbox {
  /** Label */
  label?: string;
  /** Name */
  name?: string;
  /** Options */
  input_options?: {
    /** Checked */
    checked?: boolean;
    /** Color */
    color?:
      | 'default'
      | 'error'
      | 'info'
      | 'primary'
      | 'secondary'
      | 'success'
      | 'warning';
    /** Disabled */
    disabled?: boolean;
    /** Label placement */
    label_placement?: 'bottom' | 'end' | 'start' | 'top';
    /** Required */
    required?: boolean;
    /** Size */
    size?: 'small' | 'medium';
    /** Value */
    value?: string;
  };
  /** Control */
  control: InputControlKeys;
}

export interface Textfield {
  /** Label */
  label?: string;
  /** Name */
  name?: string;
  /** Type */
  type?:
    | 'date'
    | 'email'
    | 'file'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'url';
  /** Required */
  required?: boolean;
  element_options?: {
  /** Helper text */
  helper_text?: string;
  helper_text_hint?: string;
  }
  /** Placeholder */
  placeholder?: string;
  /** Multiline */
  multiline?: boolean;
  /** Rows */
  rows?: number;
  /** Full width */
  full_width?: boolean;
  /** Control */
  control: InputControlKeys;
}

export interface TextField {
  /** Label */
  label?: string;
  /** Name */
  name?: string;
  /** Options */
  element_options?: {
    /** Auto focus */
    auto_focus?: boolean;
    /** Color */
    color?: 'error' | 'info' | 'primary' | 'secondary' | 'success' | 'warning';
    /** Disabled */
    disabled?: boolean;
    /** Full width */
    full_width?: boolean;
    /** Helper text */
    helper_text?: string;
    helper_text_hint?: string;
    /** Margin */
    margin?: 'dense' | 'none';
    /** Max rows */
    max_rows?: number;
    /** Min rows */
    min_rows?: number;
    /** Multiline */
    multiline?: boolean;
    /** Placeholder */
    placeholder?: string;
    /** Required */
    required?: boolean;
    /** Rows */
    rows?: number;
    /** Size */
    size?: 'medium' | 'small';
    /** Type */
    type?:
      | 'date'
      | 'email'
      | 'file'
      | 'password'
      | 'search'
      | 'tel'
      | 'text'
      | 'url';
    /** Value */
    value?: string;
    /** Variant */
    variant?: 'filled' | 'outlined' | 'standard';
  };
  /** Control */
  control: InputControlKeys;
}

export interface Select {
  /** Label */
  label?: string;
  /** Name */
  name?: string;
  /** Choices */
  choices?: {
    /** Label */
    label?: string;
    /** Value */
    value?: string;
  }[];
  /** Options */
  element_options?: {
    /** Auto width */
    auto_width?: boolean;
    /** Default open */
    default_open?: boolean;
    /** Display empty */
    display_empty?: boolean;
    /** Full width */
    full_width?: boolean;
    helper_text?: string;
    helper_text_hint?: string;
    /** Label ID */
    label_id?: string;
    /** Multiple */
    multiple?: boolean;
    /** Variant */
    variant?: 'filled' | 'outlined' | 'standard';
  };
  /** Control */
  control: InputControlKeys;
}

export interface Radio {
  /** Label */
  label?: string;
  /** Name */
  name?: string;
  /** Options */
  element_options?: {
    /** Checked */
    checked?: boolean;
    /** Color */
    color?:
      | 'default'
      | 'error'
      | 'info'
      | 'primary'
      | 'secondary'
      | 'success'
      | 'warning';
    /** Disabled */
    disabled?: boolean;
     /** Helper text */
    helper_text?: string;
    helper_text_hint?: string;
    /** Label placement */
    label_placement?: 'bottom' | 'end' | 'start' | 'top';
    /** Required */
    required?: boolean;
    /** Size */
    size?: 'small' | 'medium';
    /** Value */
    value?: string;
  };
  /** Control */
  control: InputControlKeys;
}

export interface CheckboxOptions {
  /** Checked */
  checked?: boolean;
  /** Color */
  color?:
    | 'default'
    | 'error'
    | 'info'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning';
  /** Disabled */
  disabled?: boolean;
  /** Label placement */
  label_placement?: 'bottom' | 'end' | 'start' | 'top';
  /** Required */
  required?: boolean;
  /** Size */
  size?: 'small' | 'medium';
  /** Value */
  value?: string;
  /** Control */
  control: InputControlKeys;
}

export interface Button {
  /** Label */
  label?: string;
  /** Options */
  input_options?: {
    /** Color */
    color?:
      | 'default'
      | 'error'
      | 'info'
      | 'inherit'
      | 'primary'
      | 'secondary'
      | 'success'
      | 'warning';
    /** Variant */
    variant?: 'contained' | 'outlined' | 'text';
  };
  /** Control */
  control?: InputControlKeys;
}

export interface Form {
  /** Label */
  label?: string;
  /** Action */
  action?: string;
  /** Method */
  method?: 'get' | 'post';
  /** Name */
  name?: string;
  /** Control */
  control?: InputControlKeys;
}

export interface RadioGroup {
  /** Label */
  label?: string;
  /** Name */
  name?: string;
  /** Control */
  control?: InputControlKeys;
}

export interface CheckboxGroup {
  /** Label */
  label?: string;
  /** Name */
  name?: string;
  /** Control */
  control?: InputControlKeys;
}

export interface ElementGroup {
  /** Label */
  label?: string;
  /** Name */
  name?: string;
}

/** The basic options for form inputs. */
export interface FormControlOptions {
  /** Checked */
  checked?: boolean;
  /** Color */
  color?:
    | 'default'
    | 'error'
    | 'info'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning';
  /** Disabled */
  disabled?: boolean;
  /** Label placement */
  label_placement?: 'bottom' | 'end' | 'start' | 'top';
  /** Required */
  required?: boolean;
  /** Size */
  size?: 'small' | 'medium';
  /** Value */
  value?: string;
}

/** Facilitates content sharing on social media platforms. */
export interface SocialShare {
  /** Social Media Share */
  social_media_share?: {
    /** Title */
    title?: string;
    /** Icon */
    icon?: File;
    /** url */
    url?: Link;
  }[];
}

/** Contains SEO related information such as meta title, meta description, etc. */
export interface Seo {
  /** Meta Title */
  meta_title?: string;
  /** Meta Description */
  meta_description?: string;
  /** Meta Keywords */
  keywords?: string;
  /** Enable Search Indexing */
  enable_search_indexing?: boolean;
}

export interface TextFieldOptions {}

export interface ContactUs {
  /** Title */
  title: string;
  /** Form */
  form?: {
    /** Email */
    email?: TextField;
    /** Subject */
    subject?: TextField;
    /** Comments */
    comments?: TextField;
  };
}

export interface FormExampleWithRegex {
  /** Title */
  title: string;
  /** Customer form */
  customer_form?: {
    /** Form */
    form?: Form;
    /** Username */
    username?: {
      /** Label */
      label?: string;
      /** Options */
      element_options?: TextFieldOptions;
      /** Password */
      password?: {
        /** Label */
        label?: string;
        /** Options */
        element_options?: TextFieldOptions;
      };
    };
  };
}

export interface Subscribe {
  /** Title */
  title: string;
  /** Description */
  description?: string;
  /** Form */
  form?: {
    /** Form options */
    form_options?: Form;
    /** Username */
    username?: TextField;
    /** Password */
    password?: TextField;
    /** Full name */
    full_name?: TextField;
    /** Dates */
    dates?: TextField;
    /** Topics */
    topics?: {
      /** Container */
      container?: CheckboxGroup;
      /** Checkboxes */
      checkboxes?: Checkbox;
    };
    /** Terms */
    terms?: Radio;
    /** Submit button */
    submit_button?: Button;
  };
}

export interface ContactForm {
  /** Title */
  title: string;
  /** Description */
  description: string;
  /** Form */
  form: {
    /** Container */
    container: Form;
    /** Inputs */
    inputs: {
      /** Name */
      name: Textfield;
      /** Email */
      email: Textfield;
      /** Location */
      location: Select;
      /** Subject */
      subject: Textfield;
      /** Description */
      description: Textfield;
      /** Terms */
      terms: CheckboxBasic;
      [key: string]: CheckboxBasic | Select | Textfield;
    };
  };
}

export interface SignupForm {
  /** Title */
  title: string;
  /** Form */
  form?: {
    /** Text field */
    text_field?: TextField;
    /** Radio group */
    radio_group?: {
      /** Container */
      container?: ElementGroup;
      /** Radio */
      radio?: Radio;
    }[];
    /** Checkbox group */
    checkbox_group?: {
      /** Container */
      container?: ElementGroup;
      /** Checkbox */
      checkbox?: Checkbox;
    };
  };
}

export interface Author {
  /** Name */
  title: string;
}

export interface Category {
  /** Title */
  title: string;
  /** Description */
  description?: string;
}

/** Basic blog post */
export interface Post {
  /** Title */
  title: string;
  /** Main image */
  main_image?: File;
  /** Categories */
  categories?: Category[];
  /** Published at */
  published_at: string;
  /** Summary */
  summary?: string;
  /** Body */
  body: any;
  /** Rendered body */
  rendered_body?: string;
  /** Global */
  global_field?: FormControlOptions;
}

export interface Hero {
  /** Heading */
  title: string;
  /** Image */
  image?: File;
  /** Layout */
  layout:
    | 'Top left'
    | 'Top center'
    | 'Top right'
    | 'Center left'
    | 'Center center'
    | 'Center right'
    | 'Bottom left'
    | 'Bottom center'
    | 'Bottom right';
  /** Content */
  content?: string;
  /** CTA */
  cta?: string;
  /** CTA type */
  cta_type?: 'Button' | 'Text';
}
