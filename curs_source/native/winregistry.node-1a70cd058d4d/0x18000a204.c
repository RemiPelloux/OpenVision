
/* Address: 0x18000a204; Evidence: ev_12595743a2e0828c57cd5a668ea418d549db93cb22dbc7d607b62c168a00f345 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_18000a204(uint param_1)

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
LAB_18000a25b:
    if (param_1 == 2) {
      puVar8 = (ulonglong *)&DAT_18001cb58;
    }
    else if (param_1 == 6) {
LAB_18000a2fd:
      puVar8 = &DAT_18001cb68;
      p_Var9 = p_Var10;
    }
    else if (param_1 == 0xf) {
      puVar8 = (ulonglong *)&DAT_18001cb70;
    }
    else if (param_1 == 0x15) {
      puVar8 = (ulonglong *)&DAT_18001cb60;
      p_Var9 = p_Var10;
    }
    else {
      if (param_1 == 0x16) goto LAB_18000a2fd;
      puVar8 = (ulonglong *)0x0;
      p_Var9 = p_Var10;
    }
  }
  else {
    if (param_1 != 4) {
      if (param_1 != 6) {
        if ((param_1 == 8) || (param_1 == 0xb)) goto LAB_18000a28b;
        if ((param_1 != 0xf) && ((param_1 != 0x15 && (param_1 != 0x16)))) goto LAB_18000a2dd;
      }
      goto LAB_18000a25b;
    }
LAB_18000a28b:
    p_Var9 = FUN_1800077a8();
    if (p_Var9 == (__acrt_ptd *)0x0) {
      return 0xffffffff;
    }
    lVar4 = *(longlong *)p_Var9;
    lVar2 = lVar4 + 0xc0;
    for (; lVar4 != lVar2; lVar4 = lVar4 + 0x10) {
      if (*(uint *)(lVar4 + 4) == param_1) goto LAB_18000a2d8;
    }
    lVar4 = 0;
LAB_18000a2d8:
    if (lVar4 == 0) {
LAB_18000a2dd:
      p_Var9 = FUN_1800072a4();
      *(undefined4 *)p_Var9 = 0x16;
      FUN_180005fec();
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
    bVar6 = (byte)DAT_18001b000 & 0x3f;
    pcVar7 = (code *)(((ulonglong)pcVar7 ^ DAT_18001b000) >> bVar6 |
                     ((ulonglong)pcVar7 ^ DAT_18001b000) << 0x40 - bVar6);
  }
  if (pcVar7 == (code *)0x1) goto LAB_18000a3e6;
  if (pcVar7 == (code *)0x0) {
    if (bVar1) {
      __acrt_unlock(3);
    }
    FUN_1800065f4(3);
    pcVar7 = (code *)swi(3);
    uVar5 = (*pcVar7)();
    return uVar5;
  }
  if ((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) {
    lVar4 = *(longlong *)(p_Var9 + 8);
    *(longlong *)(p_Var9 + 8) = 0;
    if (param_1 == 8) {
      lVar2 = FUN_180007748();
      local_res10 = *(undefined4 *)(lVar2 + 0x10);
      lVar2 = FUN_180007748();
      *(undefined4 *)(lVar2 + 0x10) = 0x8c;
      goto LAB_18000a39e;
    }
  }
  else {
LAB_18000a39e:
    if (param_1 == 8) {
      lVar2 = *(longlong *)p_Var9;
      for (lVar3 = lVar2 + 0x30; lVar3 != lVar2 + 0xc0; lVar3 = lVar3 + 0x10) {
        *(undefined8 *)(lVar3 + 8) = 0;
      }
      goto LAB_18000a3e6;
    }
  }
  *puVar8 = DAT_18001b000;
LAB_18000a3e6:
  if (bVar1) {
    __acrt_unlock(3);
  }
  if (pcVar7 != (code *)0x1) {
    if (param_1 == 8) {
      lVar2 = FUN_180007748();
      (*pcVar7)(8,*(undefined4 *)(lVar2 + 0x10));
    }
    else {
      (*pcVar7)(param_1);
    }
    if (((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) &&
       (*(longlong *)(p_Var9 + 8) = lVar4, param_1 == 8)) {
      lVar4 = FUN_180007748();
      *(undefined4 *)(lVar4 + 0x10) = local_res10;
    }
  }
  return 0;
}

