
/* Address: 0x18000ad78; Evidence: ev_21b14223af967910c920fddad3c34457ef3ce5bd000924577346c172c5452aa9 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

ulonglong FUN_18000ad78(int param_1)

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
    p_Var3 = FUN_18000b774();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_18000821c();
    return 0x16;
  }
  __acrt_initialize_multibyte();
  FUN_18000f464((HMODULE)0x0,&DAT_1800282f0,0x104);
  _DAT_180028be0 = &DAT_1800282f0;
  if ((DAT_180028c00 == (char *)0x0) || (pcVar6 = DAT_180028c00, *DAT_180028c00 == '\0')) {
    pcVar6 = &DAT_1800282f0;
  }
  local_res18 = 0;
  local_res20 = 0;
  FUN_18000ab58(pcVar6,(undefined8 *)0x0,(char *)0x0,(longlong *)&local_res18,
                (longlong *)&local_res20);
  uVar5 = local_res18;
  plVar4 = __acrt_allocate_buffer_for_argv(local_res18,local_res20,1);
  if (plVar4 == (longlong *)0x0) {
    p_Var3 = FUN_18000b774();
    uVar7 = 0xc;
    *(undefined4 *)p_Var3 = 0xc;
  }
  else {
    FUN_18000ab58(pcVar6,plVar4,(char *)(plVar4 + uVar5),(longlong *)&local_res18,
                  (longlong *)&local_res20);
    if (param_1 != 1) {
      local_res10 = (longlong *)0x0;
      uVar5 = thunk_FUN_18000ec20(plVar4,&local_res10);
      plVar2 = local_res10;
      if ((int)uVar5 != 0) {
        FUN_18000bff0(local_res10);
        local_res10 = (longlong *)0x0;
        FUN_18000bff0(plVar4);
        return uVar5 & 0xffffffff;
      }
      _DAT_180028be8 = 0;
      lVar1 = *local_res10;
      uVar5 = uVar7;
      while (lVar1 != 0) {
        local_res10 = local_res10 + 1;
        uVar5 = uVar5 + 1;
        _DAT_180028be8 = (int)uVar5;
        lVar1 = *local_res10;
      }
      local_res10 = (longlong *)0x0;
      DAT_180028bf0 = plVar2;
      FUN_18000bff0((LPVOID)0x0);
      local_res10 = (longlong *)0x0;
      goto LAB_18000aedd;
    }
    _DAT_180028be8 = (int)local_res18 + -1;
    DAT_180028bf0 = plVar4;
  }
  plVar4 = (longlong *)0x0;
LAB_18000aedd:
  FUN_18000bff0(plVar4);
  return uVar7;
}

