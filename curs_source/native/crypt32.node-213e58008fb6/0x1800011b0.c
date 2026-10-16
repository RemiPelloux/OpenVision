
/* Address: 0x1800011b0; Evidence: ev_1cd92ca1df1f01a06c4951e584aa5eae22c5532f9977ad596bea093c4b2283ef */

undefined8 * FUN_1800011b0(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_1800068f8((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_alloc::vftable;
  return param_1;
}

