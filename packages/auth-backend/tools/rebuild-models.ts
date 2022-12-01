import { DBModelSchema, ModelGenerator } from '@fangcha/generator'
import { SafeTask } from '@fangcha/tools'
import { DemoDBOptions } from './db-config'

const modelTmpl = `${__dirname}/model.tmpl.ejs`
const extendTmpl = `${__dirname}/class.extends.model.ejs`

const generator = new ModelGenerator({
  dbConfig: DemoDBOptions,
  tmplFile: modelTmpl,
  extTmplFile: extendTmpl,
})

const generalDataSchemas: DBModelSchema[] = [
  {
    generator: generator,
    tableName: 'fc_app',
    outputFile: `${__dirname}/../src/models/auto-build/__App.ts`,
    extFile: `${__dirname}/../src/models/permission/_App.ts`,
    reloadOnAdded: true,
    reloadOnUpdated: true,
  },
  {
    generator: generator,
    tableName: 'fc_app_access',
    outputFile: `${__dirname}/../src/models/auto-build/__AppAccess.ts`,
    extFile: `${__dirname}/../src/models/permission/_AppAccess.ts`,
    reloadOnAdded: true,
    reloadOnUpdated: true,
  },
  {
    generator: generator,
    tableName: 'fc_group',
    outputFile: `${__dirname}/../src/models/auto-build/__Group.ts`,
    extFile: `${__dirname}/../src/models/permission/_Group.ts`,
    reloadOnAdded: true,
    reloadOnUpdated: true,
  },
  {
    generator: generator,
    tableName: 'fc_group_access',
    outputFile: `${__dirname}/../src/models/auto-build/__GroupAccess.ts`,
    extFile: `${__dirname}/../src/models/permission/_GroupAccess.ts`,
    reloadOnAdded: true,
    reloadOnUpdated: true,
  },
  {
    generator: generator,
    tableName: 'fc_group_member',
    outputFile: `${__dirname}/../src/models/auto-build/__GroupMember.ts`,
    extFile: `${__dirname}/../src/models/permission/_GroupMember.ts`,
    reloadOnAdded: true,
    reloadOnUpdated: true,
  },
  {
    generator: generator,
    tableName: 'fc_group_permission',
    outputFile: `${__dirname}/../src/models/auto-build/__GroupPermission.ts`,
    extFile: `${__dirname}/../src/models/permission/_GroupPermission.ts`,
    reloadOnAdded: true,
    reloadOnUpdated: true,
  },
]

SafeTask.run(async () => {
  for (const schema of generalDataSchemas) {
    const generator = schema.generator!
    const data = await generator.generateData(schema)
    generator.buildModel(schema, data)
  }
})
