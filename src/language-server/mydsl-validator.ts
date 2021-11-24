import { ValidationAcceptor, ValidationCheck, ValidationRegistry } from 'langium';
import { MydslAstType, Person } from './generated/ast';
import { MydslServices } from './mydsl-module';

/**
 * Map AST node types to validation checks.
 */
type MydslChecks = { [type in MydslAstType]?: ValidationCheck | ValidationCheck[] }

/**
 * Registry for validation checks.
 */
export class MydslValidationRegistry extends ValidationRegistry {
    constructor(services: MydslServices) {
        super(services);
        const validator = services.validation.MydslValidator;
        const checks: MydslChecks = {
            Person: validator.checkPersonStartsWithCapital
        };
        this.register(checks, validator);
    }
}

/**
 * Implementation of custom validations.
 */
export class MydslValidator {

    checkPersonStartsWithCapital(person: Person, accept: ValidationAcceptor): void {
        if (person.name) {
            const firstChar = person.name.substring(0, 1);
            if (firstChar.toUpperCase() !== firstChar) {
                accept('warning', 'Person name should start with a capital.', { node: person, property: 'name', code: 'name_lowercase' });
            }
        }
    }

}
