
/* Address: 0x180011748; Evidence: ev_3d763d6352ff75a08bf348aaa9f9d27cbfa57cc69808a1f240e22c043299866d */

undefined8 FUN_180011748(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  __acrt_ptd *p_Var4;
  undefined8 uVar5;
  
  FUN_1800115c4(*param_2);
  uVar1 = *(uint *)*param_3;
  if ((*(byte *)((&DAT_1800227f0)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) != 0) {
    hFile = (HANDLE)FUN_1800116d0(uVar1);
    BVar2 = FlushFileBuffers(hFile);
    uVar5 = 0;
    if (BVar2 != 0) goto LAB_1800117bf;
    DVar3 = GetLastError();
    p_Var4 = FUN_18000c010();
    *(DWORD *)p_Var4 = DVar3;
  }
  p_Var4 = FUN_18000c034();
  *(undefined4 *)p_Var4 = 9;
  uVar5 = 0xffffffff;
LAB_1800117bf:
  FUN_1800115ec(*param_4);
  return uVar5;
}

