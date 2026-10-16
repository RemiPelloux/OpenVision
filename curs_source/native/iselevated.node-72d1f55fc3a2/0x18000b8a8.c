
/* Address: 0x18000b8a8; Evidence: ev_8cf9b8785fa4c26309413c7688cae3eef915b1b05374543b883f5e7d7fe38d6a */

undefined8 FUN_18000b8a8(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  __acrt_ptd *p_Var4;
  undefined4 *puVar5;
  undefined8 uVar6;
  
  FUN_18000b724(*param_2);
  uVar1 = *(uint *)*param_3;
  if ((*(byte *)((&DAT_18001a680)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) != 0) {
    hFile = (HANDLE)FUN_18000b830(uVar1);
    BVar2 = FlushFileBuffers(hFile);
    uVar6 = 0;
    if (BVar2 != 0) goto LAB_18000b91f;
    DVar3 = GetLastError();
    p_Var4 = FUN_18000605c();
    *(DWORD *)p_Var4 = DVar3;
  }
  puVar5 = (undefined4 *)FUN_180006080();
  *puVar5 = 9;
  uVar6 = 0xffffffff;
LAB_18000b91f:
  FUN_18000b74c(*param_4);
  return uVar6;
}

