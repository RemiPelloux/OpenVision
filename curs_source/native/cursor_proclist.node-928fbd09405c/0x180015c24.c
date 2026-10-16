
/* Address: 0x180015c24; Evidence: ev_4427e20e968ec1b530c1b282fa10e552a75e03e75e153b5f1508f9db12d5bb1d */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_180015c24(longlong *param_1,ushort *param_2,uint param_3,char *param_4,int param_5,
                       undefined8 param_6,int param_7,uint param_8,int param_9)

{
  longlong lVar1;
  int iVar2;
  uint uVar3;
  int iVar4;
  ulonglong uVar5;
  undefined4 *puVar6;
  ulonglong uVar7;
  LPCWSTR pWVar8;
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
  local_30 = DAT_180028040 ^ (ulonglong)local_38;
  if (0 < param_5) {
    __strncnt(param_4,(longlong)param_5);
  }
  if (param_8 == 0) {
    param_8 = *(uint *)(*param_1 + 0xc);
  }
  local_60 = 0;
  local_68 = 0;
  uVar5 = FUN_1800130dc(param_8,(ulonglong)((-(uint)(param_9 != 0) & 8) + 1));
  pWVar8 = (LPCWSTR)0x0;
  uVar3 = (uint)uVar5;
  puVar13 = auStack_88;
  if (uVar3 == 0) goto LAB_180015f2f;
  uVar5 = (longlong)(int)uVar3 * 2 + 0x10;
  uVar5 = -(ulonglong)((ulonglong)((longlong)(int)uVar3 * 2) < uVar5) & uVar5;
  if (uVar5 == 0) {
LAB_180015f15:
    uVar5 = 0;
    if (pWVar8 != (LPCWSTR)0x0) goto LAB_180015f1c;
  }
  else {
    if (uVar5 < 0x401) {
      uVar7 = uVar5 + 0xf;
      if (uVar7 <= uVar5) {
        uVar7 = 0xffffffffffffff0;
      }
      lVar1 = -(uVar7 & 0xfffffffffffffff0);
      puVar12 = auStack_88 + lVar1;
      puVar10 = auStack_88 + lVar1;
      puVar6 = (undefined4 *)((longlong)local_38 + lVar1);
      pWVar8 = (LPCWSTR)0x0;
      if (puVar6 == (undefined4 *)0x0) goto LAB_180015f15;
      *puVar6 = 0xcccc;
LAB_180015d30:
      pWVar8 = (LPCWSTR)(puVar6 + 4);
      puVar12 = puVar10;
    }
    else {
      puVar6 = _malloc_base(uVar5);
      pWVar8 = (LPCWSTR)0x0;
      puVar12 = auStack_88;
      if (puVar6 != (undefined4 *)0x0) {
        *puVar6 = 0xdddd;
        goto LAB_180015d30;
      }
    }
    if (pWVar8 == (LPCWSTR)0x0) goto LAB_180015f15;
    *(uint *)(puVar12 + 0x28) = uVar3;
    *(LPCWSTR *)(puVar12 + 0x20) = pWVar8;
    *(undefined8 *)(puVar12 + -8) = 0x180015d5a;
    iVar2 = FUN_1800130dc(param_8,1);
    if (iVar2 == 0) goto LAB_180015f15;
    *(undefined8 *)(puVar12 + 0x40) = 0;
    *(undefined8 *)(puVar12 + 0x38) = 0;
    *(undefined8 *)(puVar12 + 0x30) = 0;
    *(undefined4 *)(puVar12 + 0x28) = 0;
    *(undefined8 *)(puVar12 + 0x20) = 0;
    *(undefined8 *)(puVar12 + -8) = 0x180015d8d;
    iVar2 = FUN_180013698(param_2,param_3,pWVar8,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                          *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                          *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
    pWVar9 = (LPCWSTR)0x0;
    uVar5 = (ulonglong)iVar2;
    if (iVar2 == 0) goto LAB_180015f15;
    if ((param_3 & 0x400) == 0) {
      uVar7 = uVar5 * 2 + 0x10;
      uVar7 = -(ulonglong)(uVar5 * 2 < uVar7) & uVar7;
      if (uVar7 == 0) goto LAB_180015ef8;
      if (uVar7 < 0x401) {
        uVar5 = uVar7 + 0xf;
        if (uVar5 <= uVar7) {
          uVar5 = 0xffffffffffffff0;
        }
        *(undefined8 *)(puVar12 + -8) = 0x180015e30;
        lVar1 = -(uVar5 & 0xfffffffffffffff0);
        puVar11 = puVar12 + lVar1;
        puVar6 = (undefined4 *)(puVar12 + lVar1 + 0x50);
        puVar12 = puVar12 + lVar1;
        if (puVar6 != (undefined4 *)0x0) {
          *puVar6 = 0xcccc;
          puVar12 = puVar11;
LAB_180015e5e:
          pWVar9 = (LPCWSTR)(puVar6 + 4);
          goto LAB_180015e62;
        }
      }
      else {
        *(undefined8 *)(puVar12 + -8) = 0x180015e4e;
        puVar6 = _malloc_base(uVar7);
        pWVar9 = (LPCWSTR)0x0;
        if (puVar6 != (undefined4 *)0x0) {
          *puVar6 = 0xdddd;
          goto LAB_180015e5e;
        }
LAB_180015e62:
        if (pWVar9 != (LPCWSTR)0x0) {
          *(undefined8 *)(puVar12 + 0x40) = 0;
          *(undefined8 *)(puVar12 + 0x38) = 0;
          *(undefined8 *)(puVar12 + 0x30) = 0;
          *(int *)(puVar12 + 0x28) = iVar2;
          *(LPCWSTR *)(puVar12 + 0x20) = pWVar9;
          *(undefined8 *)(puVar12 + -8) = 0x180015e94;
          iVar4 = FUN_180013698(param_2,param_3,pWVar8,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                                *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                                *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
          if (iVar4 != 0) {
            *(undefined8 *)(puVar12 + 0x38) = 0;
            *(undefined8 *)(puVar12 + 0x30) = 0;
            if (param_7 == 0) {
              *(undefined4 *)(puVar12 + 0x28) = 0;
              *(undefined8 *)(puVar12 + 0x20) = 0;
              *(undefined8 *)(puVar12 + -8) = 0x180015ec2;
              uVar3 = FUN_18001316c(param_8,0,pWVar9,iVar2,*(LPSTR *)(puVar12 + 0x20),
                                    *(int *)(puVar12 + 0x28),*(LPBOOL *)(puVar12 + 0x30),
                                    *(LPBOOL *)(puVar12 + 0x38));
              if (uVar3 == 0) goto LAB_180015ef8;
            }
            else {
              *(int *)(puVar12 + 0x28) = param_7;
              *(undefined8 *)(puVar12 + 0x20) = param_6;
              *(undefined8 *)(puVar12 + -8) = 0x180015edc;
              uVar3 = FUN_18001316c(param_8,0,pWVar9,iVar2,*(LPSTR *)(puVar12 + 0x20),
                                    *(int *)(puVar12 + 0x28),*(LPBOOL *)(puVar12 + 0x30),
                                    *(LPBOOL *)(puVar12 + 0x38));
              if (uVar3 == 0) goto LAB_180015efd;
            }
            uVar5 = (ulonglong)uVar3;
            if (*(int *)(pWVar9 + -8) == 0xdddd) {
              *(undefined8 *)(puVar12 + -8) = 0x180015ef3;
              FUN_1800116e0(pWVar9 + -8);
            }
            goto LAB_180015f1c;
          }
LAB_180015ef8:
          if (pWVar9 != (LPCWSTR)0x0) {
LAB_180015efd:
            if (*(int *)(pWVar9 + -8) == 0xdddd) {
              *(undefined8 *)(puVar12 + -8) = 0x180015f0e;
              FUN_1800116e0(pWVar9 + -8);
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
        *(undefined8 *)(puVar12 + -8) = 0x180015de5;
        uVar3 = FUN_180013698(param_2,param_3,pWVar8,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                              *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                              *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
        uVar5 = (ulonglong)uVar3;
        if (uVar3 != 0) goto LAB_180015f1c;
      }
      goto LAB_180015f15;
    }
LAB_180015f1c:
    if (*(int *)(pWVar8 + -8) == 0xdddd) {
      *(undefined8 *)(puVar12 + -8) = 0x180015f2d;
      FUN_1800116e0(pWVar8 + -8);
    }
  }
  uVar5 = uVar5 & 0xffffffff;
  puVar13 = puVar12;
LAB_180015f2f:
  *(undefined8 *)(puVar13 + -8) = 0x180015f3b;
  return uVar5;
}

