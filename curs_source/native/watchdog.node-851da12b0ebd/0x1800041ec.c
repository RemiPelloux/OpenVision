
/* Address: 0x1800041ec; Evidence: ev_faf059e1c3e46b3c2f66b64a9d56fccae9fa6899bd965857ed3f27eb01a9cbc9 */

undefined8 * FUN_1800041ec(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_1800049d0((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_exception::vftable;
  return param_1;
}

