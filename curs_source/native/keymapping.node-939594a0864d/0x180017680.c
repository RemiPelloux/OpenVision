
/* Address: 0x180017680; Evidence: ev_cf93c77384ca51cc05cd8f5a00b9b5502c9b3e48328d7be37677d7288ffc2c09 */

ulonglong FUN_180017680(longlong param_1)

{
  bool bVar1;
  undefined7 extraout_var;
  PIMAGE_SECTION_HEADER p_Var3;
  ulonglong uVar2;
  
  bVar1 = FUN_1800176d0((short *)&IMAGE_DOS_HEADER_180000000);
  uVar2 = CONCAT71(extraout_var,bVar1);
  if ((int)uVar2 != 0) {
    p_Var3 = _FindPESection((PBYTE)&IMAGE_DOS_HEADER_180000000,param_1 - 0x180000000);
    uVar2 = 0;
    if (p_Var3 != (PIMAGE_SECTION_HEADER)0x0) {
      uVar2 = (ulonglong)(~p_Var3->Characteristics >> 0x1f);
    }
  }
  return uVar2;
}

