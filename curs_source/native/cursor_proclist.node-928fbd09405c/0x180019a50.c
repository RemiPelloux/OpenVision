
/* Address: 0x180019a50; Evidence: ev_c5bef407c59bdccce233cb4a7e30983e6ba39df0f71e68a954ac96d709a32394 */

void FUN_180019a50(undefined8 param_1,longlong param_2)

{
  if ((*(uint *)(param_2 + 0x118) & 1) != 0) {
    *(uint *)(param_2 + 0x118) = *(uint *)(param_2 + 0x118) & 0xfffffffe;
    FUN_180005720(*(longlong **)(param_2 + 0x100));
  }
  return;
}

