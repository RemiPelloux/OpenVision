
/* Address: 0x18000545c; Evidence: ev_8b159f782588dae7801ba66d7e1c688fa2486d3af453a072f99b9d6e9d5a3824 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

ulonglong FUN_18000545c(int param_1)

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
    p_Var3 = FUN_180006350();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_1800061a8();
    return 0x16;
  }
  __acrt_initialize_multibyte();
  FUN_180007904((HMODULE)0x0,&DAT_18001b1a0,0x104);
  _DAT_18001b590 = &DAT_18001b1a0;
  if ((DAT_18001b5b0 == (char *)0x0) || (pcVar6 = DAT_18001b5b0, *DAT_18001b5b0 == '\0')) {
    pcVar6 = &DAT_18001b1a0;
  }
  local_res18 = 0;
  local_res20 = 0;
  FUN_18000523c(pcVar6,(undefined8 *)0x0,(char *)0x0,(longlong *)&local_res18,
                (longlong *)&local_res20);
  uVar5 = local_res18;
  plVar4 = __acrt_allocate_buffer_for_argv(local_res18,local_res20,1);
  if (plVar4 == (longlong *)0x0) {
    p_Var3 = FUN_180006350();
    uVar7 = 0xc;
    *(undefined4 *)p_Var3 = 0xc;
  }
  else {
    FUN_18000523c(pcVar6,plVar4,(char *)(plVar4 + uVar5),(longlong *)&local_res18,
                  (longlong *)&local_res20);
    if (param_1 != 1) {
      local_res10 = (longlong *)0x0;
      uVar5 = thunk_FUN_1800070c0(plVar4,&local_res10);
      plVar2 = local_res10;
      if ((int)uVar5 != 0) {
        FUN_180006d00(local_res10);
        local_res10 = (longlong *)0x0;
        FUN_180006d00(plVar4);
        return uVar5 & 0xffffffff;
      }
      _DAT_18001b598 = 0;
      lVar1 = *local_res10;
      uVar5 = uVar7;
      while (lVar1 != 0) {
        local_res10 = local_res10 + 1;
        uVar5 = uVar5 + 1;
        _DAT_18001b598 = (int)uVar5;
        lVar1 = *local_res10;
      }
      local_res10 = (longlong *)0x0;
      DAT_18001b5a0 = plVar2;
      FUN_180006d00((LPVOID)0x0);
      local_res10 = (longlong *)0x0;
      goto LAB_1800055c1;
    }
    _DAT_18001b598 = (int)local_res18 + -1;
    DAT_18001b5a0 = plVar4;
  }
  plVar4 = (longlong *)0x0;
LAB_1800055c1:
  FUN_180006d00(plVar4);
  return uVar7;
}

