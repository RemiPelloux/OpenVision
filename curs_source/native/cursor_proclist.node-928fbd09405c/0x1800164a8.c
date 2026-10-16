
/* Address: 0x1800164a8; Evidence: ev_64ed3515f40f73828ff2570a77d63d33647529cf28c8c9d28c32a013753962e9 */

undefined8 FUN_1800164a8(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  __acrt_ptd *p_Var4;
  undefined8 uVar5;
  
  FUN_180016324(*param_2);
  uVar1 = *(uint *)*param_3;
  if ((*(byte *)((&DAT_180029920)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) != 0) {
    hFile = (HANDLE)FUN_180016430(uVar1);
    BVar2 = FlushFileBuffers(hFile);
    uVar5 = 0;
    if (BVar2 != 0) goto LAB_18001651f;
    DVar3 = GetLastError();
    p_Var4 = FUN_180010dc0();
    *(DWORD *)p_Var4 = DVar3;
  }
  p_Var4 = FUN_180010de4();
  *(undefined4 *)p_Var4 = 9;
  uVar5 = 0xffffffff;
LAB_18001651f:
  FUN_18001634c(*param_4);
  return uVar5;
}

