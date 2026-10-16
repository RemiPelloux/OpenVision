
/* Address: 0x180007240; Evidence: ev_c4ef316d3c545bb8c37297a37010897aa88a1bc3f5c5d7fd7dba43789fce6431 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */
/* Library Function - Single Match
    __vcrt_initialize_ptd
   
   Library: Visual Studio 2019 Release */

uint __vcrt_initialize_ptd(void)

{
  uint uVar1;
  int iVar2;
  uint3 extraout_var;
  
  uVar1 = __vcrt_FlsAlloc(FUN_1800070f0);
  DAT_180022070 = uVar1;
  if (uVar1 != 0xffffffff) {
    iVar2 = __vcrt_FlsSetValue(uVar1,&DAT_1800231f0);
    if (iVar2 != 0) {
      _DAT_180023268 = 0xfffffffe;
      return CONCAT31((int3)((uint)iVar2 >> 8),1);
    }
    FUN_180007288();
    uVar1 = (uint)extraout_var << 8;
  }
  return uVar1 & 0xffffff00;
}

