import React, {PropTypes} from "react";

import {asNumber} from "../../utils";

function NumberField(props) {
  const {StringField} = props.registry.fields;
  return (
    <StringField {...props}
      onChange={(value) => {
        let inputAsNumber = asNumber(value);
        if (Number.isInteger(inputAsNumber)) {
          props.onChange(inputAsNumber);
        }
      }}/>
  );
}

if (process.env.NODE_ENV !== "production") {
  NumberField.propTypes = {
    schema: PropTypes.object.isRequired,
    uiSchema: PropTypes.object,
    idSchema: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    formData: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    required: PropTypes.bool,
    formContext: PropTypes.object.isRequired,
  };
}

NumberField.defaultProps = {
  uiSchema: {}
};

export default NumberField;
