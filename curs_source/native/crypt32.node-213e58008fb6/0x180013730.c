
/* Address: 0x180013730; Evidence: ev_d982782ffa874b526c443098bf33db636c454714b4561c6c6c57c52fb1abac98 */

bool FUN_180013730(short *param_1)

{
  if ((*param_1 == 0x5a4d) &&
     (*(int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1) == 0x4550)) {
    return (short)((int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1))[6] == 0x20b;
  }
  return false;
}

