
/* Address: 0x18000748c; Evidence: ev_1991d0e3fae2e8acabb8334a2ae173f45b4fa21f010c9425cfd9a81cb5f854f6 */

undefined8 * FUN_18000748c(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180005634((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_exception::vftable;
  return param_1;
}

