
/* Address: 0x180009354; Evidence: ev_16a095ee42170ddbba13bd3b7de0bd00eda9a57fc84dfc52b23b1941d157c467 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180009354(uint param_1)

{
  bool bVar1;
  longlong lVar2;
  longlong lVar3;
  longlong lVar4;
  undefined8 uVar5;
  byte bVar6;
  code *pcVar7;
  ulonglong *puVar8;
  __acrt_ptd *p_Var9;
  undefined4 local_res10;
  __acrt_ptd *p_Var10;
  
  p_Var10 = (__acrt_ptd *)0x0;
  p_Var9 = (__acrt_ptd *)0x0;
  local_res10 = 0;
  bVar1 = true;
  if (param_1 == 2) {
LAB_1800093ab:
    if (param_1 == 2) {
      puVar8 = (ulonglong *)&DAT_18001ba90;
    }
    else if (param_1 == 6) {
LAB_18000944d:
      puVar8 = &DAT_18001baa0;
      p_Var9 = p_Var10;
    }
    else if (param_1 == 0xf) {
      puVar8 = (ulonglong *)&DAT_18001baa8;
    }
    else if (param_1 == 0x15) {
      puVar8 = (ulonglong *)&DAT_18001ba98;
      p_Var9 = p_Var10;
    }
    else {
      if (param_1 == 0x16) goto LAB_18000944d;
      puVar8 = (ulonglong *)0x0;
      p_Var9 = p_Var10;
    }
  }
  else {
    if (param_1 != 4) {
      if (param_1 != 6) {
        if ((param_1 == 8) || (param_1 == 0xb)) goto LAB_1800093db;
        if ((param_1 != 0xf) && ((param_1 != 0x15 && (param_1 != 0x16)))) goto LAB_18000942d;
      }
      goto LAB_1800093ab;
    }
LAB_1800093db:
    p_Var9 = FUN_180006858();
    if (p_Var9 == (__acrt_ptd *)0x0) {
      return 0xffffffff;
    }
    lVar4 = *(longlong *)p_Var9;
    lVar2 = lVar4 + 0xc0;
    for (; lVar4 != lVar2; lVar4 = lVar4 + 0x10) {
      if (*(uint *)(lVar4 + 4) == param_1) goto LAB_180009428;
    }
    lVar4 = 0;
LAB_180009428:
    if (lVar4 == 0) {
LAB_18000942d:
      p_Var9 = FUN_180006350();
      *(undefined4 *)p_Var9 = 0x16;
      FUN_1800061a8();
      return 0xffffffff;
    }
    puVar8 = (ulonglong *)(lVar4 + 8);
    bVar1 = false;
  }
  lVar4 = 0;
  if (bVar1) {
    __acrt_lock(3);
  }
  pcVar7 = (code *)*puVar8;
  if (bVar1) {
    bVar6 = (byte)DAT_18001a000 & 0x3f;
    pcVar7 = (code *)(((ulonglong)pcVar7 ^ DAT_18001a000) >> bVar6 |
                     ((ulonglong)pcVar7 ^ DAT_18001a000) << 0x40 - bVar6);
  }
  if (pcVar7 == (code *)0x1) goto LAB_180009536;
  if (pcVar7 == (code *)0x0) {
    if (bVar1) {
      __acrt_unlock(3);
    }
    FUN_180005028(3);
    pcVar7 = (code *)swi(3);
    uVar5 = (*pcVar7)();
    return uVar5;
  }
  if ((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) {
    lVar4 = *(longlong *)(p_Var9 + 8);
    *(longlong *)(p_Var9 + 8) = 0;
    if (param_1 == 8) {
      lVar2 = FUN_1800067f8();
      local_res10 = *(undefined4 *)(lVar2 + 0x10);
      lVar2 = FUN_1800067f8();
      *(undefined4 *)(lVar2 + 0x10) = 0x8c;
      goto LAB_1800094ee;
    }
  }
  else {
LAB_1800094ee:
    if (param_1 == 8) {
      lVar2 = *(longlong *)p_Var9;
      for (lVar3 = lVar2 + 0x30; lVar3 != lVar2 + 0xc0; lVar3 = lVar3 + 0x10) {
        *(undefined8 *)(lVar3 + 8) = 0;
      }
      goto LAB_180009536;
    }
  }
  *puVar8 = DAT_18001a000;
LAB_180009536:
  if (bVar1) {
    __acrt_unlock(3);
  }
  if (pcVar7 != (code *)0x1) {
    if (param_1 == 8) {
      lVar2 = FUN_1800067f8();
      (*pcVar7)(8,*(undefined4 *)(lVar2 + 0x10));
    }
    else {
      (*pcVar7)(param_1);
    }
    if (((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) &&
       (*(longlong *)(p_Var9 + 8) = lVar4, param_1 == 8)) {
      lVar4 = FUN_1800067f8();
      *(undefined4 *)(lVar4 + 0x10) = local_res10;
    }
  }
  return 0;
}

