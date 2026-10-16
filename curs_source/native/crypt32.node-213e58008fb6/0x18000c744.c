
/* Address: 0x18000c744; Evidence: ev_ddee975d357d918b055d6ba8dbf75c71256a4ea7f331198b5d52cb8d426dbde8 */

void FUN_18000c744(longlong param_1,longlong *param_2,longlong param_3)

{
  longlong lVar1;
  
  if ((*param_2 != (&DAT_1800226f0)[param_3]) && ((DAT_180021858 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    lVar1 = FUN_18000dfd0();
    *param_2 = lVar1;
  }
  return;
}

