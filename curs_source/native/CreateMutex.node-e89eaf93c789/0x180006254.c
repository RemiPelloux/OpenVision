
/* Address: 0x180006254; Evidence: ev_599c24b8694575ff589e3e106a6f331e5b2227000461030a88e6c3f1b797a351 */

longlong * FUN_180006254(longlong *param_1,undefined8 param_2,byte *param_3,longlong *param_4)

{
  *param_4 = *param_1;
  if ((*param_3 & 1) != 0) {
    *param_4 = *(longlong *)((ulonglong)*(uint *)(param_3 + 0x14) + *param_1);
  }
  return param_4;
}

