
/* Address: 0x180003f2c; Evidence: ev_521e892327c6fd7008731dcf72c51d7f6456fc4f21203d216fdca156d883429c */

undefined8 * FUN_180003f2c(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180004710((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_exception::vftable;
  return param_1;
}

