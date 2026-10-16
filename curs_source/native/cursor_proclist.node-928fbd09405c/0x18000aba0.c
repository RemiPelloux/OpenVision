
/* Address: 0x18000aba0; Evidence: ev_ced3243972a2a0e77c997c36808335feaeecc47429753635f8f34e42541e108c */

longlong * FUN_18000aba0(longlong *param_1,undefined8 param_2,byte *param_3,longlong *param_4)

{
  *param_4 = *param_1;
  if ((*param_3 & 1) != 0) {
    *param_4 = *(longlong *)((ulonglong)*(uint *)(param_3 + 0x14) + *param_1);
  }
  return param_4;
}

