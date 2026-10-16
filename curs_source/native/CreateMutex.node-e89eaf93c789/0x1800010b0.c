
/* Address: 0x1800010b0; Evidence: ev_7423f450e697d3c2809d5c8f8547897cc32b19945f30262036c486279525eae9 */

undefined8 * FUN_1800010b0(undefined8 *param_1,uint param_2)

{
  *param_1 = std::exception::vftable;
  FUN_180006bf8(param_1 + 1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000cbe0(param_1);
  }
  return param_1;
}

