
/* Address: 0x180005190; Evidence: ev_11af7020367eb9b0524d29d747401b59875de2c3bf6e58546437bbc136a55c6e */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

ulonglong FUN_180005190(int param_1)

{
  longlong lVar1;
  longlong *plVar2;
  undefined4 *puVar3;
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
    puVar3 = (undefined4 *)FUN_180006080();
    *puVar3 = 0x16;
    FUN_180005ed8();
    return 0x16;
  }
  __acrt_initialize_multibyte();
  FUN_180007634((HMODULE)0x0,&DAT_18001a1a0,0x104);
  _DAT_18001a590 = &DAT_18001a1a0;
  if ((DAT_18001a5b0 == (char *)0x0) || (pcVar6 = DAT_18001a5b0, *DAT_18001a5b0 == '\0')) {
    pcVar6 = &DAT_18001a1a0;
  }
  local_res18 = 0;
  local_res20 = 0;
  FUN_180004f70(pcVar6,(undefined8 *)0x0,(char *)0x0,(longlong *)&local_res18,
                (longlong *)&local_res20);
  uVar5 = local_res18;
  plVar4 = __acrt_allocate_buffer_for_argv(local_res18,local_res20,1);
  if (plVar4 == (longlong *)0x0) {
    puVar3 = (undefined4 *)FUN_180006080();
    uVar7 = 0xc;
    *puVar3 = 0xc;
  }
  else {
    FUN_180004f70(pcVar6,plVar4,(char *)(plVar4 + uVar5),(longlong *)&local_res18,
                  (longlong *)&local_res20);
    if (param_1 != 1) {
      local_res10 = (longlong *)0x0;
      uVar5 = thunk_FUN_180006df0(plVar4,&local_res10);
      plVar2 = local_res10;
      if ((int)uVar5 != 0) {
        FUN_180006a30(local_res10);
        local_res10 = (longlong *)0x0;
        FUN_180006a30(plVar4);
        return uVar5 & 0xffffffff;
      }
      _DAT_18001a598 = 0;
      lVar1 = *local_res10;
      uVar5 = uVar7;
      while (lVar1 != 0) {
        local_res10 = local_res10 + 1;
        uVar5 = uVar5 + 1;
        _DAT_18001a598 = (int)uVar5;
        lVar1 = *local_res10;
      }
      local_res10 = (longlong *)0x0;
      DAT_18001a5a0 = plVar2;
      FUN_180006a30((LPVOID)0x0);
      local_res10 = (longlong *)0x0;
      goto LAB_1800052f5;
    }
    _DAT_18001a598 = (int)local_res18 + -1;
    DAT_18001a5a0 = plVar4;
  }
  plVar4 = (longlong *)0x0;
LAB_1800052f5:
  FUN_180006a30(plVar4);
  return uVar7;
}

