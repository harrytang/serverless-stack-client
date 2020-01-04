/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2020-01-04 18:25:20
 * @Last Modified by:   Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2020-01-04 18:25:20
 */

import { useState } from "react";

export function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function(event) {
      setValues({
        ...fields,
        [event.target.id]: event.target.value
      });
    }
  ];
}
