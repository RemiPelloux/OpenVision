
/* Address: 0x1800074c8; Evidence: ev_2f21744dceaa569c986a858eb4a8f19cbe97fecf66417fa1188637c61dbe635b */

undefined8 * FUN_1800074c8(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad exception";
  *param_1 = std::bad_exception::vftable;
  return param_1;
}

