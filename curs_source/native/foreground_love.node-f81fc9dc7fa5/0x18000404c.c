
/* Address: 0x18000404c; Evidence: ev_9f9cab174b9c58080830c72ae436dc049aa1a92568eea0b6f677e5a9b4035edf */

undefined8 * FUN_18000404c(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180004830((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_exception::vftable;
  return param_1;
}

