
/* Address: 0x18000b530; Evidence: ev_0affbe406a41849c4134954a07529f6eaa884a968511a142ff0872a23409a9d7 */

/* Library Function - Single Match
    _msize_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _msize_base(longlong param_1)

{
  undefined4 *puVar1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    puVar1 = (undefined4 *)FUN_1800061a0();
    *puVar1 = 0x16;
    FUN_180005ff8();
    return 0xffffffffffffffff;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000b562. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  uVar2 = HeapSize(DAT_18001b678,0,param_1);
  return uVar2;
}

