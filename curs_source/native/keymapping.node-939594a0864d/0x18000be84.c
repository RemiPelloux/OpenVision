
/* Address: 0x18000be84; Evidence: ev_9b01ae0db0833ad5ceb208ae93b54e316de521ce094f11a935614e0db22d94b1 */

void FUN_18000be84(longlong param_1,longlong *param_2,longlong param_3)

{
  longlong lVar1;
  
  if ((*param_2 != (&DAT_180028bd0)[param_3]) && ((DAT_1800278b8 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    lVar1 = FUN_18000fdf0();
    *param_2 = lVar1;
  }
  return;
}

