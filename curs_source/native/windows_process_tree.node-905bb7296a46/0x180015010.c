
/* Address: 0x180015010; Evidence: ev_9161fa97a3f62da982dff53a7824f502ae433bc3b517bbae6e694c94dfbdbb97 */

ulonglong thunk_FUN_180015020(ulonglong param_1)

{
  uint uVar1;
  
  uVar1 = (uint)(param_1 >> 0x34) & 0x7ff;
  if (uVar1 == 0x7ff) {
    return (ulonglong)(ushort)(((param_1 & 0xfffffffffffff) != 0) + 1);
  }
  if (uVar1 == 0) {
    return CONCAT62((int6)(-(param_1 & 0x7fffffffffffffff) >> 0x10),
                    -(ushort)((param_1 & 0x7fffffffffffffff) != 0)) & 0xfffffffffffffffe;
  }
  return 0xffffffff;
}

