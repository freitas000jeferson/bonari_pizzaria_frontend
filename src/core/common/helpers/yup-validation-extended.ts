import * as yup from 'yup';

function validateJson(this: yup.StringSchema, errorMessage: string) {
  return this.test(
    'validateJson',
    errorMessage,
    (testJsonValue: string | undefined) => {
      try {
        if (testJsonValue) {
          JSON.parse(testJsonValue);
        } else {
          return false;
        }
      } catch (e) {
        return false;
      }
      return true;
    }
  );
}

yup.addMethod(yup.string, 'validateJson', validateJson);
export default yup;
