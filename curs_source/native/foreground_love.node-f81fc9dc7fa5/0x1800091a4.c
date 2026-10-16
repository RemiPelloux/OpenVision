
/* Address: 0x1800091a4; Evidence: ev_8e912843263b2bbaf8251e0f7207a64c5e43cd3530de212876fa38ffee465c6c */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_1800091a4(uint param_1)

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
  longlong *plVar10;
  undefined4 local_res10;
  longlong *plVar11;
  
  plVar11 = (longlong *)0x0;
  plVar10 = (longlong *)0x0;
  local_res10 = 0;
  bVar1 = true;
  if (param_1 == 2) {
LAB_1800091fb:
    if (param_1 == 2) {
      puVar9 = (ulonglong *)&DAT_18001ba90;
    }
    else if (param_1 == 6) {
LAB_18000929d:
      puVar9 = &DAT_18001baa0;
      plVar10 = plVar11;
    }
    else if (param_1 == 0xf) {
      puVar9 = (ulonglong *)&DAT_18001baa8;
    }
    else if (param_1 == 0x15) {
      puVar9 = (ulonglong *)&DAT_18001ba98;
      plVar10 = plVar11;
    }
    else {
      if (param_1 == 0x16) goto LAB_18000929d;
      puVar9 = (ulonglong *)0x0;
      plVar10 = plVar11;
    }
  }
  else {
    if (param_1 != 4) {
      if (param_1 != 6) {
        if ((param_1 == 8) || (param_1 == 0xb)) goto LAB_18000922b;
        if ((param_1 != 0xf) && ((param_1 != 0x15 && (param_1 != 0x16)))) goto LAB_18000927d;
      }
      goto LAB_1800091fb;
    }
LAB_18000922b:
    plVar10 = FUN_1800066a8();
    if (plVar10 == (longlong *)0x0) {
      return 0xffffffff;
    }
    lVar5 = *plVar10;
    lVar3 = lVar5 + 0xc0;
    for (; lVar5 != lVar3; lVar5 = lVar5 + 0x10) {
      if (*(uint *)(lVar5 + 4) == param_1) goto LAB_180009278;
    }
    lVar5 = 0;
LAB_180009278:
    if (lVar5 == 0) {
LAB_18000927d:
      puVar2 = (undefined4 *)FUN_1800061a0();
      *puVar2 = 0x16;
      FUN_180005ff8();
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
    bVar7 = (byte)DAT_18001a000 & 0x3f;
    pcVar8 = (code *)(((ulonglong)pcVar8 ^ DAT_18001a000) >> bVar7 |
                     ((ulonglong)pcVar8 ^ DAT_18001a000) << 0x40 - bVar7);
  }
  if (pcVar8 == (code *)0x1) goto LAB_180009386;
  if (pcVar8 == (code *)0x0) {
    if (bVar1) {
      __acrt_unlock(3);
    }
    FUN_18000507c(3);
    pcVar8 = (code *)swi(3);
    uVar6 = (*pcVar8)();
    return uVar6;
  }
  if ((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) {
    lVar5 = plVar10[1];
    plVar10[1] = 0;
    if (param_1 == 8) {
      lVar3 = FUN_180006648();
      local_res10 = *(undefined4 *)(lVar3 + 0x10);
      lVar3 = FUN_180006648();
      *(undefined4 *)(lVar3 + 0x10) = 0x8c;
      goto LAB_18000933e;
    }
  }
  else {
LAB_18000933e:
    if (param_1 == 8) {
      lVar3 = *plVar10;
      for (lVar4 = lVar3 + 0x30; lVar4 != lVar3 + 0xc0; lVar4 = lVar4 + 0x10) {
        *(undefined8 *)(lVar4 + 8) = 0;
      }
      goto LAB_180009386;
    }
  }
  *puVar9 = DAT_18001a000;
LAB_180009386:
  if (bVar1) {
    __acrt_unlock(3);
  }
  if (pcVar8 != (code *)0x1) {
    if (param_1 == 8) {
      lVar3 = FUN_180006648();
      (*pcVar8)(8,*(undefined4 *)(lVar3 + 0x10));
    }
    else {
      (*pcVar8)(param_1);
    }
    if (((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) &&
       (plVar10[1] = lVar5, param_1 == 8)) {
      lVar5 = FUN_180006648();
      *(undefined4 *)(lVar5 + 0x10) = local_res10;
    }
  }
  return 0;
}

