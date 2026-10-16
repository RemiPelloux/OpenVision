
/* Address: 0x1800011b0; Evidence: ev_484d68068dcb64f9f744f1a2077b1164e21ec47aee9cb4e6f96e17759ee8e333 */

undefined8 * FUN_1800011b0(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180007f48((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_alloc::vftable;
  return param_1;
}

