
/* Address: 0x180007624; Evidence: ev_00892c1407c25328bdc4bf6a5a65d515bfdbfc9a29a53d56d35dbdc77221f4d3 */

longlong * FUN_180007624(longlong *param_1,undefined8 param_2,byte *param_3,longlong *param_4)

{
  *param_4 = *param_1;
  if ((*param_3 & 1) != 0) {
    *param_4 = *(longlong *)((ulonglong)*(uint *)(param_3 + 0x14) + *param_1);
  }
  return param_4;
}

