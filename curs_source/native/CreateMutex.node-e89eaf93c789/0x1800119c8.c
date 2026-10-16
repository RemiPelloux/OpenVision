
/* Address: 0x1800119c8; Evidence: ev_bb68fffdcdb79c16882f265e8d5b9837fdf8c3b6175c0d30004d01d53dc9b05a */

undefined8 FUN_1800119c8(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  __acrt_ptd *p_Var4;
  undefined8 uVar5;
  
  FUN_180011844(*param_2);
  uVar1 = *(uint *)*param_3;
  if ((*(byte *)((&DAT_1800237f0)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) != 0) {
    hFile = (HANDLE)FUN_180011950(uVar1);
    BVar2 = FlushFileBuffers(hFile);
    uVar5 = 0;
    if (BVar2 != 0) goto LAB_180011a3f;
    DVar3 = GetLastError();
    p_Var4 = FUN_18000c290();
    *(DWORD *)p_Var4 = DVar3;
  }
  p_Var4 = FUN_18000c2b4();
  *(undefined4 *)p_Var4 = 9;
  uVar5 = 0xffffffff;
LAB_180011a3f:
  FUN_18001186c(*param_4);
  return uVar5;
}

