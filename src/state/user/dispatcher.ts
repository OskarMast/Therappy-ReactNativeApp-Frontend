import { Dispatch } from 'react';
import {
  AcceptInvitationStartPayload,
  DeletePaymentMethodStart,
  UpdateStartPayload,
  UpdateTherapistStartPayload,
  UserActions,
} from './actionTypes';
import {
  acceptInvitationStartAction,
  fetchPaymentMethodsStartAction,
  fetchStartAction,
  resetError,
  updateStartAction,
  updateTherapistStartAction,
  deletePaymentMethodStartAction,
  fetchAccountInformationStartAction,
  setupIntentStartAction,
} from './actions';
export default class Dispatcher {
  _dispatch: Dispatch<UserActions>;

  constructor(dispatch: Dispatch<UserActions>) {
    this._dispatch = dispatch;
  }

  fetchStart = () => this._dispatch(fetchStartAction());

  //   updateImageStart = image =>
  //     this.dispatch({type: Types.UPDATE_IMAGE_START, payload: image});

  updateStart = (payload: UpdateStartPayload) => this._dispatch(updateStartAction(payload));

  updateTherapistStart = (payload: UpdateTherapistStartPayload) => this._dispatch(updateTherapistStartAction(payload));

  setupIntentStart = () => this._dispatch(setupIntentStartAction());
  deletePaymentMethodStart = (payload: string) => this._dispatch(deletePaymentMethodStartAction(payload));

  fetchPaymentMethodsStart = () => this._dispatch(fetchPaymentMethodsStartAction());
  fetchAccountInformationStart = () => this._dispatch(fetchAccountInformationStartAction());

  acceptInvitationStart = (payload: AcceptInvitationStartPayload) =>
    this._dispatch(acceptInvitationStartAction(payload));

  resetError = () => this._dispatch(resetError());
}
