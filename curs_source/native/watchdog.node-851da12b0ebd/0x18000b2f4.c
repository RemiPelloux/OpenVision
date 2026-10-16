
/* Address: 0x18000b2f4; Evidence: ev_710ce275aee681200a6062c0bbd83c75046a4e560cfcb032f082c98ebb559c9b */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_18000b2f4(longlong *param_1,ushort *param_2,uint param_3,char *param_4,int param_5,
                       undefined8 param_6,int param_7,uint param_8,int param_9)

{
  longlong lVar1;
  int iVar2;
  uint uVar3;
  int iVar4;
  ulonglong uVar5;
  undefined4 *puVar6;
  undefined4 *puVar7;
  ulonglong uVar8;
  LPCWSTR pWVar9;
  undefined1 *puVar10;
  undefined1 *puVar11;
  undefined1 *puVar12;
  undefined1 *puVar13;
  undefined1 auStack_88 [32];
  undefined8 local_68;
  undefined4 local_60;
  undefined4 local_38 [2];
  ulonglong local_30;
  
  puVar10 = auStack_88;
  puVar12 = auStack_88;
  local_30 = DAT_18001a000 ^ (ulonglong)local_38;
  if (0 < param_5) {
    __strncnt(param_4,(longlong)param_5);
  }
  if (param_8 == 0) {
    param_8 = *(uint *)(*param_1 + 0xc);
  }
  local_60 = 0;
  local_68 = 0;
  uVar5 = FUN_180008628(param_8,(ulonglong)((-(uint)(param_9 != 0) & 8) + 1));
  pWVar9 = (LPCWSTR)0x0;
  uVar3 = (uint)uVar5;
  puVar13 = auStack_88;
  if (uVar3 == 0) goto LAB_18000b5ff;
  uVar5 = (longlong)(int)uVar3 * 2 + 0x10;
  uVar5 = -(ulonglong)((ulonglong)((longlong)(int)uVar3 * 2) < uVar5) & uVar5;
  if (uVar5 == 0) {
LAB_18000b5e5:
    uVar5 = 0;
    if (pWVar9 != (LPCWSTR)0x0) goto LAB_18000b5ec;
  }
  else {
    if (uVar5 < 0x401) {
      uVar8 = uVar5 + 0xf;
      if (uVar8 <= uVar5) {
        uVar8 = 0xffffffffffffff0;
      }
      lVar1 = -(uVar8 & 0xfffffffffffffff0);
      puVar12 = auStack_88 + lVar1;
      puVar10 = auStack_88 + lVar1;
      puVar6 = (undefined4 *)((longlong)local_38 + lVar1);
      pWVar9 = (LPCWSTR)0x0;
      if (puVar6 == (undefined4 *)0x0) goto LAB_18000b5e5;
      *puVar6 = 0xcccc;
LAB_18000b400:
      pWVar9 = (LPCWSTR)(puVar6 + 4);
      puVar12 = puVar10;
    }
    else {
      puVar6 = _malloc_base(uVar5);
      pWVar9 = (LPCWSTR)0x0;
      puVar12 = auStack_88;
      if (puVar6 != (undefined4 *)0x0) {
        *puVar6 = 0xdddd;
        goto LAB_18000b400;
      }
    }
    if (pWVar9 == (LPCWSTR)0x0) goto LAB_18000b5e5;
    *(uint *)(puVar12 + 0x28) = uVar3;
    *(LPCWSTR *)(puVar12 + 0x20) = pWVar9;
    *(undefined8 *)(puVar12 + -8) = 0x18000b42a;
    iVar2 = FUN_180008628(param_8,1);
    if (iVar2 == 0) goto LAB_18000b5e5;
    *(undefined8 *)(puVar12 + 0x40) = 0;
    *(undefined8 *)(puVar12 + 0x38) = 0;
    *(undefined8 *)(puVar12 + 0x30) = 0;
    *(undefined4 *)(puVar12 + 0x28) = 0;
    *(undefined8 *)(puVar12 + 0x20) = 0;
    *(undefined8 *)(puVar12 + -8) = 0x18000b45d;
    iVar2 = FUN_180008be8(param_2,param_3,pWVar9,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                          *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                          *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
    puVar6 = (undefined4 *)0x0;
    uVar5 = (ulonglong)iVar2;
    if (iVar2 == 0) goto LAB_18000b5e5;
    if ((param_3 & 0x400) == 0) {
      uVar8 = uVar5 * 2 + 0x10;
      uVar8 = -(ulonglong)(uVar5 * 2 < uVar8) & uVar8;
      if (uVar8 == 0) goto LAB_18000b5c8;
      if (uVar8 < 0x401) {
        uVar5 = uVar8 + 0xf;
        if (uVar5 <= uVar8) {
          uVar5 = 0xffffffffffffff0;
        }
        *(undefined8 *)(puVar12 + -8) = 0x18000b500;
        lVar1 = -(uVar5 & 0xfffffffffffffff0);
        puVar11 = puVar12 + lVar1;
        puVar7 = (undefined4 *)(puVar12 + lVar1 + 0x50);
        puVar12 = puVar12 + lVar1;
        if (puVar7 != (undefined4 *)0x0) {
          *puVar7 = 0xcccc;
          puVar12 = puVar11;
LAB_18000b52e:
          puVar6 = puVar7 + 4;
          goto LAB_18000b532;
        }
      }
      else {
        *(undefined8 *)(puVar12 + -8) = 0x18000b51e;
        puVar7 = _malloc_base(uVar8);
        puVar6 = (undefined4 *)0x0;
        if (puVar7 != (undefined4 *)0x0) {
          *puVar7 = 0xdddd;
          goto LAB_18000b52e;
        }
LAB_18000b532:
        if (puVar6 != (undefined4 *)0x0) {
          *(undefined8 *)(puVar12 + 0x40) = 0;
          *(undefined8 *)(puVar12 + 0x38) = 0;
          *(undefined8 *)(puVar12 + 0x30) = 0;
          *(int *)(puVar12 + 0x28) = iVar2;
          *(undefined4 **)(puVar12 + 0x20) = puVar6;
          *(undefined8 *)(puVar12 + -8) = 0x18000b564;
          iVar4 = FUN_180008be8(param_2,param_3,pWVar9,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                                *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                                *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
          if (iVar4 != 0) {
            *(undefined8 *)(puVar12 + 0x38) = 0;
            *(undefined8 *)(puVar12 + 0x30) = 0;
            if (param_7 == 0) {
              *(undefined4 *)(puVar12 + 0x28) = 0;
              *(undefined8 *)(puVar12 + 0x20) = 0;
              *(undefined8 *)(puVar12 + -8) = 0x18000b592;
              uVar3 = FUN_1800086b8(param_8,0,puVar6,iVar2);
              if (uVar3 == 0) goto LAB_18000b5c8;
            }
            else {
              *(int *)(puVar12 + 0x28) = param_7;
              *(undefined8 *)(puVar12 + 0x20) = param_6;
              *(undefined8 *)(puVar12 + -8) = 0x18000b5ac;
              uVar3 = FUN_1800086b8(param_8,0,puVar6,iVar2);
              if (uVar3 == 0) goto LAB_18000b5cd;
            }
            uVar5 = (ulonglong)uVar3;
            if (puVar6[-4] == 0xdddd) {
              *(undefined8 *)(puVar12 + -8) = 0x18000b5c3;
              FUN_180006d00(puVar6 + -4);
            }
            goto LAB_18000b5ec;
          }
LAB_18000b5c8:
          if (puVar6 != (undefined4 *)0x0) {
LAB_18000b5cd:
            if (puVar6[-4] == 0xdddd) {
              *(undefined8 *)(puVar12 + -8) = 0x18000b5de;
              FUN_180006d00(puVar6 + -4);
            }
          }
        }
      }
      uVar5 = 0;
    }
    else if (param_7 != 0) {
      if (iVar2 <= param_7) {
        *(undefined8 *)(puVar12 + 0x40) = 0;
        *(undefined8 *)(puVar12 + 0x38) = 0;
        *(undefined8 *)(puVar12 + 0x30) = 0;
        *(int *)(puVar12 + 0x28) = param_7;
        *(undefined8 *)(puVar12 + 0x20) = param_6;
        *(undefined8 *)(puVar12 + -8) = 0x18000b4b5;
        uVar3 = FUN_180008be8(param_2,param_3,pWVar9,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                              *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                              *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
        uVar5 = (ulonglong)uVar3;
        if (uVar3 != 0) goto LAB_18000b5ec;
      }
      goto LAB_18000b5e5;
    }
LAB_18000b5ec:
    if (*(int *)(pWVar9 + -8) == 0xdddd) {
      *(undefined8 *)(puVar12 + -8) = 0x18000b5fd;
      FUN_180006d00(pWVar9 + -8);
    }
  }
  uVar5 = uVar5 & 0xffffffff;
  puVar13 = puVar12;
LAB_18000b5ff:
  *(undefined8 *)(puVar13 + -8) = 0x18000b60b;
  return uVar5;
}

