
/* Address: 0x18000c710; Evidence: ev_7bdb8156dd6e3150ab2de4b908a573fb4862492812de36a0b357a09f88ea89e2 */

void FUN_18000c710(longlong param_1,longlong *param_2)

{
  longlong lVar1;
  
  if ((*param_2 != DAT_1800226f0) && ((DAT_180021858 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    lVar1 = FUN_18000dfd0();
    *param_2 = lVar1;
  }
  return;
}

