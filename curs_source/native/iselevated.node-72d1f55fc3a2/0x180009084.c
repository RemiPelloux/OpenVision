
/* Address: 0x180009084; Evidence: ev_e2c2da7d4a20d067d90e9156255ef4273cb7dd197481a523a8b1c4e53a4fd8a6 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180009084(uint param_1)

{
  bool bVar1;
  undefined4 *puVar2;
  longlong lVar3;
  longlong lVar4;
  longlong lVar5;
  undefined8 uVar6;
  byte bVar7;
  code *pcVar8;
  ulonglong *puVar9;
  __acrt_ptd *p_Var10;
  undefined4 local_res10;
  __acrt_ptd *p_Var11;
  
  p_Var11 = (__acrt_ptd *)0x0;
  p_Var10 = (__acrt_ptd *)0x0;
  local_res10 = 0;
  bVar1 = true;
  if (param_1 == 2) {
LAB_1800090db:
    if (param_1 == 2) {
      puVar9 = (ulonglong *)&DAT_18001aa90;
    }
    else if (param_1 == 6) {
LAB_18000917d:
      puVar9 = &DAT_18001aaa0;
      p_Var10 = p_Var11;
    }
    else if (param_1 == 0xf) {
      puVar9 = (ulonglong *)&DAT_18001aaa8;
    }
    else if (param_1 == 0x15) {
      puVar9 = (ulonglong *)&DAT_18001aa98;
      p_Var10 = p_Var11;
    }
    else {
      if (param_1 == 0x16) goto LAB_18000917d;
      puVar9 = (ulonglong *)0x0;
      p_Var10 = p_Var11;
    }
  }
  else {
    if (param_1 != 4) {
      if (param_1 != 6) {
        if ((param_1 == 8) || (param_1 == 0xb)) goto LAB_18000910b;
        if ((param_1 != 0xf) && ((param_1 != 0x15 && (param_1 != 0x16)))) goto LAB_18000915d;
      }
      goto LAB_1800090db;
    }
LAB_18000910b:
    p_Var10 = FUN_180006588();
    if (p_Var10 == (__acrt_ptd *)0x0) {
      return 0xffffffff;
    }
    lVar5 = *(longlong *)p_Var10;
    lVar3 = lVar5 + 0xc0;
    for (; lVar5 != lVar3; lVar5 = lVar5 + 0x10) {
      if (*(uint *)(lVar5 + 4) == param_1) goto LAB_180009158;
    }
    lVar5 = 0;
LAB_180009158:
    if (lVar5 == 0) {
LAB_18000915d:
      puVar2 = (undefined4 *)FUN_180006080();
      *puVar2 = 0x16;
      FUN_180005ed8();
      return 0xffffffff;
    }
    puVar9 = (ulonglong *)(lVar5 + 8);
    bVar1 = false;
  }
  lVar5 = 0;
  if (bVar1) {
    __acrt_lock(3);
  }
  pcVar8 = (code *)*puVar9;
  if (bVar1) {
    bVar7 = (byte)DAT_180019000 & 0x3f;
    pcVar8 = (code *)(((ulonglong)pcVar8 ^ DAT_180019000) >> bVar7 |
                     ((ulonglong)pcVar8 ^ DAT_180019000) << 0x40 - bVar7);
  }
  if (pcVar8 == (code *)0x1) goto LAB_180009266;
  if (pcVar8 == (code *)0x0) {
    if (bVar1) {
      __acrt_unlock(3);
    }
    FUN_180004f5c(3);
    pcVar8 = (code *)swi(3);
    uVar6 = (*pcVar8)();
    return uVar6;
  }
  if ((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) {
    lVar5 = *(longlong *)(p_Var10 + 8);
    *(longlong *)(p_Var10 + 8) = 0;
    if (param_1 == 8) {
      lVar3 = FUN_180006528();
      local_res10 = *(undefined4 *)(lVar3 + 0x10);
      lVar3 = FUN_180006528();
      *(undefined4 *)(lVar3 + 0x10) = 0x8c;
      goto LAB_18000921e;
    }
  }
  else {
LAB_18000921e:
    if (param_1 == 8) {
      lVar3 = *(longlong *)p_Var10;
      for (lVar4 = lVar3 + 0x30; lVar4 != lVar3 + 0xc0; lVar4 = lVar4 + 0x10) {
        *(undefined8 *)(lVar4 + 8) = 0;
      }
      goto LAB_180009266;
    }
  }
  *puVar9 = DAT_180019000;
LAB_180009266:
  if (bVar1) {
    __acrt_unlock(3);
  }
  if (pcVar8 != (code *)0x1) {
    if (param_1 == 8) {
      lVar3 = FUN_180006528();
      (*pcVar8)(8,*(undefined4 *)(lVar3 + 0x10));
    }
    else {
      (*pcVar8)(param_1);
    }
    if (((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) &&
       (*(longlong *)(p_Var10 + 8) = lVar5, param_1 == 8)) {
      lVar5 = FUN_180006528();
      *(undefined4 *)(lVar5 + 0x10) = local_res10;
    }
  }
  return 0;
}

