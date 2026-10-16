
/* Address: 0x18001032c; Evidence: ev_c7c4bdc94b1e5c5abf0238a528c364cafaa94b0272f30ac12541a2615759e309 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */
/* WARNING: Function: __chkstk replaced with injection: alloca_probe */

BOOL FUN_18001032c(longlong *param_1,DWORD param_2,undefined8 param_3,undefined8 param_4,
                  LPWORD param_5,uint param_6,int param_7)

{
  ulonglong uVar1;
  longlong lVar2;
  int iVar3;
  BOOL BVar4;
  ulonglong uVar5;
  undefined4 *puVar6;
  ulonglong uVar7;
  undefined1 (*lpSrcStr) [32];
  undefined1 *puVar8;
  undefined1 *puVar9;
  BOOL BVar10;
  undefined1 auStack_88 [32];
  undefined8 local_68;
  undefined4 local_60;
  undefined4 local_58 [2];
  longlong local_50;
  longlong local_48;
  char local_38;
  ulonglong local_30;
  
  puVar8 = auStack_88;
  puVar9 = auStack_88;
  local_30 = DAT_180021000 ^ (ulonglong)local_58;
  FUN_18000a710(&local_50,param_1);
  if (param_6 == 0) {
    param_6 = *(uint *)(local_48 + 0xc);
  }
  local_60 = 0;
  local_68 = 0;
  iVar3 = FUN_18000e368(param_6,(ulonglong)((-(uint)(param_7 != 0) & 8) + 1));
  if (iVar3 == 0) {
    BVar10 = 0;
    puVar9 = auStack_88;
    goto LAB_180010482;
  }
  uVar1 = (longlong)iVar3 * 2;
  uVar7 = -(ulonglong)(uVar1 < uVar1 + 0x10) & uVar1 + 0x10;
  if (uVar7 == 0) {
    lpSrcStr = (undefined1 (*) [32])0x0;
LAB_18001046a:
    BVar10 = 0;
    BVar4 = 0;
    if (lpSrcStr == (undefined1 (*) [32])0x0) goto LAB_180010482;
  }
  else {
    if (uVar7 < 0x401) {
      uVar5 = uVar7 + 0xf;
      if (uVar5 <= uVar7) {
        uVar5 = 0xffffffffffffff0;
      }
      lVar2 = -(uVar5 & 0xfffffffffffffff0);
      puVar9 = auStack_88 + lVar2;
      puVar8 = auStack_88 + lVar2;
      puVar6 = (undefined4 *)((longlong)local_58 + lVar2);
      lpSrcStr = (undefined1 (*) [32])0x0;
      if (puVar6 == (undefined4 *)0x0) goto LAB_18001046a;
      *puVar6 = 0xcccc;
LAB_180010418:
      lpSrcStr = (undefined1 (*) [32])(puVar6 + 4);
      puVar9 = puVar8;
    }
    else {
      puVar6 = _malloc_base(uVar7);
      lpSrcStr = (undefined1 (*) [32])0x0;
      puVar9 = auStack_88;
      if (puVar6 != (undefined4 *)0x0) {
        *puVar6 = 0xdddd;
        goto LAB_180010418;
      }
    }
    if (lpSrcStr == (undefined1 (*) [32])0x0) goto LAB_18001046a;
    *(undefined8 *)(puVar9 + -8) = 0x18001042e;
    FUN_180013a30(lpSrcStr,0,uVar1);
    *(int *)(puVar9 + 0x28) = iVar3;
    *(undefined1 (**) [32])(puVar9 + 0x20) = lpSrcStr;
    *(undefined8 *)(puVar9 + -8) = 0x18001044a;
    iVar3 = FUN_18000e368(param_6,1);
    if (iVar3 == 0) goto LAB_18001046a;
    *(undefined8 *)(puVar9 + -8) = 0x180010464;
    BVar4 = GetStringTypeW(param_2,(LPCWSTR)lpSrcStr,iVar3,param_5);
  }
  BVar10 = BVar4;
  if (*(int *)(lpSrcStr[-1] + 0x10) == 0xdddd) {
    *(undefined8 *)(puVar9 + -8) = 0x180010482;
    FUN_18000c960(lpSrcStr[-1] + 0x10);
  }
LAB_180010482:
  if (local_38 != '\0') {
    *(uint *)(local_50 + 0x3a8) = *(uint *)(local_50 + 0x3a8) & 0xfffffffd;
  }
  *(undefined8 *)(puVar9 + -8) = 0x1800104a1;
  return BVar10;
}

