
/* Address: 0x18000ddb4; Evidence: ev_c63d36461a4eadde604c352f7f0739612be8a1fa114ee1f63d63a07504bfb1a3 */

void FUN_18000ddb4(longlong param_1,longlong *param_2,longlong param_3)

{
  longlong lVar1;
  
  if ((*param_2 != (&DAT_1800246f0)[param_3]) && ((DAT_180023858 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    lVar1 = FUN_18000f640();
    *param_2 = lVar1;
  }
  return;
}

