
/* Address: 0x18000b934; Evidence: ev_280d84cb04fa9e0356c5cc0e4c5e1013476505892a810b436fbad99020a12878 */

/* Library Function - Single Match
    _commit
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl _commit(int _FileHandle)

{
  undefined4 *puVar1;
  undefined8 uVar2;
  int local_res8 [2];
  undefined1 local_res10 [8];
  uint local_res18 [2];
  uint local_res20 [2];
  int *local_18 [3];
  
  local_res8[0] = _FileHandle;
  if (_FileHandle == -2) {
    puVar1 = (undefined4 *)FUN_180006080();
    *puVar1 = 9;
  }
  else {
    if (((-1 < _FileHandle) && ((uint)_FileHandle < DAT_18001aa80)) &&
       ((*(byte *)((&DAT_18001a680)[(longlong)_FileHandle >> 6] + 0x38 +
                  (ulonglong)(_FileHandle & 0x3f) * 0x48) & 1) != 0)) {
      local_18[0] = local_res8;
      local_res18[0] = _FileHandle;
      local_res20[0] = _FileHandle;
      uVar2 = FUN_18000b8a8(local_res10,local_res20,local_18,local_res18);
      return (int)uVar2;
    }
    puVar1 = (undefined4 *)FUN_180006080();
    *puVar1 = 9;
    FUN_180005ed8();
  }
  return -1;
}

