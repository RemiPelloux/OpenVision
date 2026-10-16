
/* Address: 0x180007d10; Evidence: ev_8e1a2a1bce3622562d306e0e3aaa318a6b04448de5ba5bd6a152d52bea02a549 */

ulonglong FUN_180007d10(ulonglong param_1,ulonglong param_2)

{
  if (param_1 < param_2) {
    return 0xffffffff;
  }
  return (ulonglong)(param_2 < param_1);
}

