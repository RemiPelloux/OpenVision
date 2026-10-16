
/* Address: 0x18000b410; Evidence: ev_f530d9623959e351bc26db16c0c6dd9558a73162c52357c4f1dec7f5d1089953 */

/* Library Function - Single Match
    _msize_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _msize_base(longlong param_1)

{
  undefined4 *puVar1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    puVar1 = (undefined4 *)FUN_180006080();
    *puVar1 = 0x16;
    FUN_180005ed8();
    return 0xffffffffffffffff;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000b442. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  uVar2 = HeapSize(DAT_18001a678,0,param_1);
  return uVar2;
}

