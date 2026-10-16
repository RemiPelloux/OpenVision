
/* Address: 0x1800100e4; Evidence: ev_bb0765921d836b49c5faa8a3ca336851e89777fa3b58b1736c3e4721f4a1c47b */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

ulonglong FUN_1800100e4(int param_1)

{
  longlong lVar1;
  longlong *plVar2;
  __acrt_ptd *p_Var3;
  longlong *plVar4;
  ulonglong uVar5;
  char *pcVar6;
  ulonglong uVar7;
  longlong *local_res10;
  ulonglong local_res18;
  ulonglong local_res20;
  
  uVar7 = 0;
  if (param_1 == 0) {
    return 0;
  }
  if (1 < param_1 - 1U) {
    p_Var3 = FUN_180010de4();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_18000f91c();
    return 0x16;
  }
  __acrt_initialize_multibyte();
  FUN_1800123bc((HMODULE)0x0,&DAT_180029440,0x104);
  _DAT_180029830 = &DAT_180029440;
  if ((DAT_180029850 == (char *)0x0) || (pcVar6 = DAT_180029850, *DAT_180029850 == '\0')) {
    pcVar6 = &DAT_180029440;
  }
  local_res18 = 0;
  local_res20 = 0;
  FUN_18000fec4(pcVar6,(undefined8 *)0x0,(char *)0x0,(longlong *)&local_res18,
                (longlong *)&local_res20);
  uVar5 = local_res18;
  plVar4 = __acrt_allocate_buffer_for_argv(local_res18,local_res20,1);
  if (plVar4 == (longlong *)0x0) {
    p_Var3 = FUN_180010de4();
    uVar7 = 0xc;
    *(undefined4 *)p_Var3 = 0xc;
  }
  else {
    FUN_18000fec4(pcVar6,plVar4,(char *)(plVar4 + uVar5),(longlong *)&local_res18,
                  (longlong *)&local_res20);
    if (param_1 != 1) {
      local_res10 = (longlong *)0x0;
      uVar5 = thunk_FUN_180011b78(plVar4,&local_res10);
      plVar2 = local_res10;
      if ((int)uVar5 != 0) {
        FUN_1800116e0(local_res10);
        local_res10 = (longlong *)0x0;
        FUN_1800116e0(plVar4);
        return uVar5 & 0xffffffff;
      }
      _DAT_180029838 = 0;
      lVar1 = *local_res10;
      uVar5 = uVar7;
      while (lVar1 != 0) {
        local_res10 = local_res10 + 1;
        uVar5 = uVar5 + 1;
        _DAT_180029838 = (int)uVar5;
        lVar1 = *local_res10;
      }
      local_res10 = (longlong *)0x0;
      DAT_180029840 = plVar2;
      FUN_1800116e0((LPVOID)0x0);
      local_res10 = (longlong *)0x0;
      goto LAB_180010249;
    }
    _DAT_180029838 = (int)local_res18 + -1;
    DAT_180029840 = plVar4;
  }
  plVar4 = (longlong *)0x0;
LAB_180010249:
  FUN_1800116e0(plVar4);
  return uVar7;
}

