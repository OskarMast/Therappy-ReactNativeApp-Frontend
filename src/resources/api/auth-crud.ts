import Axios from 'axios';
import Authorization from './auth';
import {executeCall} from './utils';
import LoginResponse from '../../interfaces/User/LoginResponse';

const authCrudder = (domain: string, resource: string) => {
  const url = `${domain}/${resource}`;

  const headers = Authorization;

  return {
    login: (data: {email: string; password: string}) =>
      executeCall<LoginResponse>(() =>
        Axios.post<LoginResponse>(`${url}/login`, data, {headers: {}}),
      ),
    // register: data =>
    //   executeCall(() => Axios.post(`${url}/register`, data, {headers: {}})),
    // confirmation: data =>
    //   executeCall(() => Axios.post(`${url}/confirmation`, data, {headers})),
    // requestEmailConfirmation: () =>
    //   executeCall(() =>
    //     Axios.post(`${url}/request-confirmation-email`, {}, {headers}),
    //   ),
    // requestPasswordRecovery: data =>
    //   executeCall(() => Axios.post(`${url}/request-password-recovery`, data)),
    // passwordRecovery: data =>
    //   executeCall(() => Axios.post(`${url}/new-password`, data)),
  };
};

export default authCrudder;
