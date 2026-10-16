
/* Address: 0x180005fd4; Evidence: ev_0196f4c9b0411bccb97abe321eafd7c706aca14e1f97004353fd11f773ed5787 */

longlong * FUN_180005fd4(longlong *param_1,undefined8 param_2,byte *param_3,longlong *param_4)

{
  *param_4 = *param_1;
  if ((*param_3 & 1) != 0) {
    *param_4 = *(longlong *)((ulonglong)*(uint *)(param_3 + 0x14) + *param_1);
  }
  return param_4;
}

