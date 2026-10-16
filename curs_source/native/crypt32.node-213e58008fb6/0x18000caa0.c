
/* Address: 0x18000caa0; Evidence: ev_ff1ace5ae809ecd4712061783f8604ea5ae9634f3f2a21d42c2200fc20eebf96 */

ulonglong FUN_18000caa0(ulonglong param_1,ulonglong param_2)

{
  if (param_1 < param_2) {
    return 0xffffffff;
  }
  return (ulonglong)(param_2 < param_1);
}

