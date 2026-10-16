
/* Address: 0x18000b5b8; Evidence: ev_b5baad1e12c8681580dfb32087410f77ec2f0e76d807d9c0b5990a081f96a7a5 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

ulonglong FUN_18000b5b8(int param_1)

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
    p_Var3 = FUN_18000c034();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_18000ad7c();
    return 0x16;
  }
  __acrt_initialize_multibyte();
  FUN_18000d644((HMODULE)0x0,&DAT_180022310,0x104);
  _DAT_180022700 = &DAT_180022310;
  if ((DAT_180022720 == (char *)0x0) || (pcVar6 = DAT_180022720, *DAT_180022720 == '\0')) {
    pcVar6 = &DAT_180022310;
  }
  local_res18 = 0;
  local_res20 = 0;
  FUN_18000b398(pcVar6,(undefined8 *)0x0,(char *)0x0,(longlong *)&local_res18,
                (longlong *)&local_res20);
  uVar5 = local_res18;
  plVar4 = __acrt_allocate_buffer_for_argv(local_res18,local_res20,1);
  if (plVar4 == (longlong *)0x0) {
    p_Var3 = FUN_18000c034();
    uVar7 = 0xc;
    *(undefined4 *)p_Var3 = 0xc;
  }
  else {
    FUN_18000b398(pcVar6,plVar4,(char *)(plVar4 + uVar5),(longlong *)&local_res18,
                  (longlong *)&local_res20);
    if (param_1 != 1) {
      local_res10 = (longlong *)0x0;
      uVar5 = thunk_FUN_18000ce00(plVar4,&local_res10);
      plVar2 = local_res10;
      if ((int)uVar5 != 0) {
        FUN_18000c960(local_res10);
        local_res10 = (longlong *)0x0;
        FUN_18000c960(plVar4);
        return uVar5 & 0xffffffff;
      }
      _DAT_180022708 = 0;
      lVar1 = *local_res10;
      uVar5 = uVar7;
      while (lVar1 != 0) {
        local_res10 = local_res10 + 1;
        uVar5 = uVar5 + 1;
        _DAT_180022708 = (int)uVar5;
        lVar1 = *local_res10;
      }
      local_res10 = (longlong *)0x0;
      DAT_180022710 = plVar2;
      FUN_18000c960((LPVOID)0x0);
      local_res10 = (longlong *)0x0;
      goto LAB_18000b71d;
    }
    _DAT_180022708 = (int)local_res18 + -1;
    DAT_180022710 = plVar4;
  }
  plVar4 = (longlong *)0x0;
LAB_18000b71d:
  FUN_18000c960(plVar4);
  return uVar7;
}

